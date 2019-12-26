<template>
  <ion-content>
    <div class="fixation-handle">
      <ion-button fill="clear" size="large" @click="zoomChange(1)">
        <ion-icon slot="icon-only" name="add"></ion-icon>
      </ion-button>
      <ion-button fill="clear" size="large" @click="zoomChange(-1)">
        <ion-icon slot="icon-only" name="remove"></ion-icon>
      </ion-button>
      <ion-button fill="clear" size="large" @click="rotateChange(1)">
        <ion-icon slot="icon-only" name="redo"></ion-icon>
      </ion-button>
      <ion-button fill="clear" size="large" @click="rotateChange(-1)">
        <ion-icon slot="icon-only" name="undo"></ion-icon>
      </ion-button>
    </div>
    <div class="img-div">
      <div style="overflow: auto;">
        <img src="../assets/1.png" :style="{transform: `rotate(${this.rotate}deg) scale(${this.zoom})`}">
      </div>
    </div>
  </ion-content>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  name: 'drawing'
})
export default class extends Vue{
  zoom: number = 1.4;
  zoomStep: number = 0.2;
  rotate: number = 0;
  rotateStep: number = 90;

  zoomChange(seed: number) {
    this.zoom = this.zoom + this.zoomStep * seed;
  }
  rotateChange(seed: number) {
    this.rotate = this.rotate + this.rotateStep * seed;
    if(this.rotate < 0 || this.rotate >= 360) {
        this.rotate = 0
    }
  }
}
</script>
<style>
  .img-div {
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    /*margin:.1rem;*/
    /*padding: 1rem;*/
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    /*box-sizing: border-box;*/
  }
  .img-div img{
    max-width: inherit;
    display: block;
  }
  .fixation-handle{
    position: absolute;
    right: 2rem;
    bottom: 10%;
    z-index: 9;
    background: rgba(0,0,0,.6);
  }
</style>
