import { GetColladaModelAsync, GetCubesGLTF, GetCubesCollada, GetGLTFModelAsync } from "../src/main.ts";



// const model = await GetGLTFModelAsync("test/heliov.glb");

// const cubes = GetCubesGLTF(model)

const model = await GetColladaModelAsync("test/test1.dae");

const cubes = GetCubesCollada(model)

console.log(`Found ${cubes.length}`)
console.log(`Cubes: ${cubes.map(s => s.name)}`)
console.log(`A cube: ${JSON.stringify(cubes.find(e => !e.camera) ?? cubes[0], undefined, 2)}`)