import { GltfAsset, LoadingManager } from "gltf-loader-ts";
import { LoaderUtils } from "three";

export const BINARY_HEADER_MAGIC = 'glTF';
const BINARY_HEADER_LENGTH = 12;
const BINARY_CHUNK_TYPES = { JSON: 0x4e4f534a, BIN: 0x004e4942 };

export class GLTFBinaryData {
    json = "";
    binaryChunk: Uint8Array = new Uint8Array();
    
    constructor(data: ArrayBuffer) {
        const headerView = new DataView(data, 0, BINARY_HEADER_LENGTH);

        const header = {
            magic: LoaderUtils.decodeText(new Uint8Array(data, 0, 4)),
            version: headerView.getUint32(4, true),
            length: headerView.getUint32(8, true),
        };

        if (header.magic !== BINARY_HEADER_MAGIC) {
            throw new Error('Unsupported glTF-Binary header.');
        } else if (header.version < 2.0) {
            throw new Error('Unsupported legacy binary file detected.');
        }

        const chunkView = new DataView(data, BINARY_HEADER_LENGTH);
        let chunkIndex = 0;
        while (chunkIndex < chunkView.byteLength) {
            const chunkLength = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;

            const chunkType = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;

            if (chunkType === BINARY_CHUNK_TYPES.JSON) {
                const contentArray = new Uint8Array(data, BINARY_HEADER_LENGTH + chunkIndex, chunkLength);
                this.json = LoaderUtils.decodeText(contentArray);

            } else if (chunkType === BINARY_CHUNK_TYPES.BIN) {
                const byteOffset = BINARY_HEADER_LENGTH + chunkIndex;
                this.binaryChunk = new Uint8Array(data, byteOffset, chunkLength);
            }

            // Clients must ignore chunks with unknown types.

            chunkIndex += chunkLength;
        }

        if (this.json === null) {
            throw new Error('glTF-Binary: JSON content not found.');
        }
    }
}

export async function parseGLTF(data: ArrayBuffer): Promise<GltfAsset> {
    let content: string;
    // tslint:disable-next-line:no-unnecessary-initializer
    let glbData: GLTFBinaryData | undefined = undefined;
    if (typeof data === 'string') {
        content = data;
    } else {
        const magic = LoaderUtils.decodeText(data.slice(0, 4));
        if (magic === BINARY_HEADER_MAGIC) {
            glbData = new GLTFBinaryData(new Uint8Array(data).buffer);
            content = glbData.json;
        } else {
            content = LoaderUtils.decodeText(new Uint8Array(data));
        }
    }

    const json = JSON.parse(content);

    if (json.asset === undefined || json.asset.version[0] < 2) {
        throw new Error('Unsupported asset. glTF versions >=2.0 are supported.');
    }

    return new GltfAsset(json, "", glbData, new LoadingManager());
}