import * as THREE from 'three';

import xml2js from "xml2js";

import '@loaders.gl/polyfills';
import { load } from '@loaders.gl/core';
import { GLTFLoader, GLTF } from '@loaders.gl/gltf';
import { Node } from '@loaders.gl/gltf/dist/lib/types/gltf-json-schema';



import { Cube } from './models';
import { readFile } from 'fs/promises';
import { COLLADAType } from './xmlns/www.collada.org/2005/11/COLLADASchema';

export { COLLADAType as Collada } from './xmlns/www.collada.org/2005/11/COLLADASchema';
export * from './xmlns/www.collada.org/2005/11/COLLADASchema';

export async function GetGTLFModelAsync(file: string) {
    const buffer = await readFile(file);
    const gltf: GLTF = await load(buffer, GLTFLoader);

    return gltf;
}

export async function GetColladaModelAsync(file: string) {
    const str = await (await readFile(file)).toString();
    
    const collada: COLLADAType = await xml2js.parseStringPromise(str);

    return collada;
}

export function GetCubes(gltf: GLTF) {
    const cubes: Cube[] = []

    const addNodes = (node: Node) => {
        console.log(`Node: ${node.name}`)
        cubes.push(node)
    }



    gltf.nodes?.forEach(addNodes)
}

export function GetCubesCollada(collada: COLLADAType) {
    const cubes: Cube[] = []

    const addNodes = (node: Node) => {
        console.log(`Node: ${node.name}`)
        cubes.push(node)
    }

    const scenes = collada.library_visual_scenes?.map((scene) => scene.visual_scene).forEach(e => e.forEach(s => s.node.forEach((node) => {
        if (!node.instance_geometry || !node.instance_camera) return;

        
    })))

}

// sad
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const gltf = require('three/examples/jsm/loaders/GLTFLoader.js');

// import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// export async function GetGTLFModelAsync(file: string) {
//     const loader = new GLTFLoader();
//     const model = await loader.loadAsync(file);

//     return model;
// }


// export function GetCubes(gltf: GLTF) {
//     const cubes: Cube[] = []

//     // const addNodes = (node: Node) => {
//     //     console.log(`Node: ${node.name}`)
//     //     cubes.push(node)
//     // }



//     gltf.scene.children?.forEach((node) => {
//         console.log(`Node: ${node.name}`)
//     })
// }

