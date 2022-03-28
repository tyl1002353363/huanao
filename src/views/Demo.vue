<template>
  <model-gltf
    class="img-view"  
    :rotation="rotation"
    @on-load="onLoad"
    src="../../static/models/gltf/matilda/33d7901c5ac2bd7843769a919cf3978d.gltf"
  ></model-gltf>
</template>

<script>
import { ModelGltf } from "vue-3d-model";
// import * as Three from "three"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// // 导入轨道模型控制器
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default {
  name: "App",
  data() {
    return {
      rotation: {
        x: 0,
        y: Math.PI / 2,
        z: 0,
      },
    };
  },
  components: {
    ModelGltf,
  },
  methods: {
            onLoad () {
                this.rotate();
            },
            rotate () {
                this.rotation.y += 0.01;
                requestAnimationFrame( this.rotate );
            }
        },
};
</script>

<style scoped>
  .img-view{
    outline: none;
  }
</style>