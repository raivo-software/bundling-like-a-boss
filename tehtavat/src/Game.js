// TÄHÄN TIEDOSTOON SINUN EI TARVITSE TEHDÄ MITÄÄN MUUTOKSIA!

import React, { Component } from 'react';
import { Scene, Engine, ArcRotateCamera, HemisphericLight, MeshBuilder, Vector3, Texture, Color3, StandardMaterial } from 'babylonjs';

const limitRadius = 48;

class Game extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas = document.getElementById("renderCanvas");
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera("Camera", Math.PI / 3, Math.PI / 3, 50, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    const light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
    const box = MeshBuilder.CreateBox("box", { size: 3 }, scene);
    var skybox = MeshBuilder.CreateBox("skyBox", {size:100.0}, scene);
    var skyboxMaterial = new StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.diffuseColor = new Color3(1, .5, 1);
    skybox.material = skyboxMaterial;
    engine.runRenderLoop(() => {
        scene.render();
    });
    scene.onBeforeRenderObservable.add(() => {
      try {
        const speed = new Vector3(this.props.speed.x, this.props.speed.y, this.props.speed.z);
        const deltaTime = engine.getDeltaTime() / 1000;
        const deltaPosition = speed.multiply(new Vector3(deltaTime, deltaTime, deltaTime));
        const targetPosition = box.absolutePosition.add(deltaPosition);
        const positionWithinRadius = (axisPosition) => Math.abs(axisPosition) < limitRadius ?
          axisPosition :
          axisPosition > 0 ?
            axisPosition - 2 * limitRadius :
            axisPosition + 2 * limitRadius;
        const finalPosition = new Vector3(positionWithinRadius(targetPosition.x),positionWithinRadius(targetPosition.y),positionWithinRadius(targetPosition.z));
        box.setAbsolutePosition(finalPosition);
      }catch(err) {
        console.log('error occurred', err);
      }
    })
  }

  render() {
    return (
      <canvas id="renderCanvas" style={{width: "60vw", height: "60vh"}}></canvas>
    )
  }
}

export default Game;