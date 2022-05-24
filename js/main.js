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
    light.intensity = 0.5
    light.groundColor = new BABYLON.Color3(0, 0, 1)
}

function createSun(scene){
    const sun = BABYLON.MeshBuilder.CreateSphere('sun', { segments: 16, diameter: 4}, scene)
}

function createPlanet(scene){
    const planetMaterial = new BABYLON.StandardMaterial('planetMaterial', scene)
    planetMaterial.diffuseTexture = new BABYLON.Texture('assets/images/sand.png', scene)
    planetMaterial.specularColor = BABYLON.Color3.Black()

    const planet = BABYLON.MeshBuilder.CreateSphere('planet', { segments: 16, diameter: 1}, scene)
    planet.position.x = 4
    planet.material = planetMaterial
}

function createScene(){
    // create our scene
    const scene = new BABYLON.Scene(engine)
    scene.clearColor = BABYLON.Color3.Black()

    createCamera()

    createLight(scene)

    createSun(scene)

    createPlanet(scene)

    return scene
}

const mainScene = createScene()

engine.runRenderLoop(() => {
    mainScene.render()
})