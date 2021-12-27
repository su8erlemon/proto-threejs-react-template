import React, { Component } from "react";
import * as THREE from "three";
import threeApp from "./lib/createThree";

import simpleFrag from "./shader/shader.frag"
import simpleVert from "./shader/shader.vert"

// Scale for retina
const DPR = Math.min(1.5, window.devicePixelRatio);
const { camera, scene, renderer } = threeApp(DPR);

class Scene extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.main();
  }

  componentWillUnmount() {

  }

  main() {


    let geo = new THREE.BoxGeometry(1, 1, 1);
    let mat = new THREE.MeshBasicMaterial({
      // wireframe: true,
      color: 0xffffff,
      map: new THREE.TextureLoader().load("/Assets/T_UV_grid_directx.jpg")
    });
    let box = new THREE.Mesh(geo, mat);
    scene.add(box);

    let shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: simpleVert,
      fragmentShader: simpleFrag
    });
    let box1 = new THREE.Mesh(geo, shaderMaterial);
    box1.position.x = 1.5;
    scene.add(box1);

    this.container.appendChild(renderer.domElement);

    renderLoop();

    function renderLoop() {
      requestAnimationFrame(renderLoop);
      renderer.render(scene, camera);
    }

  }


  render() {
    const width = "100%";
    const height = "100%";
    return (
      <div
        ref={(container) => {
          this.container = container;
        }}
        style={{
          width: width,
          height: height,
          position: "absolute",
          overflow: "hidden",
        }}></div>
    );
  }
}

export default Scene;
