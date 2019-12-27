<template>
  <div :style="{height: h + 'px', width: w + 'px', overflow: 'auto',}">
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
<!--    <div class="img-div">-->
<!--      <div style="overflow: auto;">-->
<!--        <img src="../assets/1.png" :style="{transform: `rotate(${this.rotate}deg) scale(${this.zoom})`}">-->
<!--      </div>-->
<!--    </div>-->
    <canvas :id="cid" :ref="cid"></canvas>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component({
  name: 'drawing'
})
export default class extends Vue{
  scaleSize: number = 1;
  zoomStep: number = 0.2;
  rotate: number = 0;
  rotateStep: number = 90;

  canvas: any;
  context: any;
  img: any;
  @Prop({default: 'cid'}) cid: string | undefined
  @Prop({default: ''}) imgUrl: string | undefined
  @Prop({default: 0}) w: number | undefined
  @Prop({default: 0}) h: number | undefined

  mounted() {
    this.canvas = this.$refs[this.cid + ''];
    this.context = this.canvas.getContext('2d')
    this.img = new Image;
    this.img.onload = this.drawImg
    this.img.src = 'http://47.110.45.52:8085' + this.imgUrl;
  }
  drawImg() {
    let tx = 0
    let ty = 0
    if(this.rotate === 0 || this.rotate === 180) {
        this.canvas.width = this.img.width * this.scaleSize
        this.canvas.height = this.img.height * this.scaleSize
        if(this.rotate === 180) {
            ty = this.img.height * this.scaleSize
            tx = this.img.width * this.scaleSize
        }
    }else {
        this.canvas.width = this.img.height * this.scaleSize
        this.canvas.height = this.img.width * this.scaleSize
        if(this.rotate === 90) {
            tx = this.img.height * this.scaleSize
        }else if(this.rotate === 270) {
            ty = this.img.width * this.scaleSize
        }
    }
    this.context.translate(tx, ty)
    this.context.scale(this.scaleSize, this.scaleSize);
    this.context.rotate(this.rotate * Math.PI / 180)
    this.context.drawImage(this.img, 0, 0); // Or at whatever offset you like
  }
  zoomChange(seed: number) {
    this.scaleSize = this.scaleSize * (1 + seed * this.zoomStep)
    this.drawImg()
  }
  rotateChange(seed: number) {
    this.rotate = this.rotate + this.rotateStep * seed;
    if(this.rotate < 0 || this.rotate >= 360) {
        this.rotate = 0
    }
    this.drawImg()
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
