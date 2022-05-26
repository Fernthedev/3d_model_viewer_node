// deno-lint-ignore-file no-explicit-any
// Adapted from THEE.FileLoader
// https://github.com/mrdoob/three.js/blob/master/src/loaders/FileLoader.js

import { LoadingManager } from './loadingmanager.ts';

export type ProgressCallback = (xhr: any) => void;
export type XMLHttpRequestResponse = any;

export class FileLoader {
    manager: LoadingManager;
    path: string | undefined;

    private runningRequests: { [url: string]: Promise<XMLHttpRequestResponse>} = {};

    constructor(manager: LoadingManager) {
        this.manager = manager;
    }
    load(url: string) {
        if (this.path !== undefined) { url = this.path + url; }
        url = this.manager.resolveURL(url);

        return Deno.readFile(url)
    }

}
