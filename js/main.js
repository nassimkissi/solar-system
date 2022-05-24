/// <reference path='./vendor/babylon.d.ts' />

// get our canvas
const canvas = document.getElementById('renderCanvas')

// create a BabylonJS engine 
const engine = new BABYLON.Engine(canvas, true)

function createCamera(scene){
    const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 15, BABYLON.Vector3.Zero(), scene)

    camera.attachControl(canvas)

    camera.lowerRadiusLimit = 6 
    camera.upperRadiusLimit = 20 
}

function createLight(scene){
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)
}

function createSun(scene){
    const sun = BABYLON.MeshBuilder.CreateSphere('sun', { segments: 16, diameter: 4}, scene)
}

function createScene(){
    // create our scene
    const scene = new BABYLON.Scene(engine)

    createCamera()

    createLight(scene)

    createSun(scene)

    return scene
}

const mainScene = createScene()

engine.runRenderLoop(() => {
    mainScene.render()
})