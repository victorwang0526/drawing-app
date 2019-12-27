<template>
  <div style="overflow: auto">
    <canvas id="firstCanvas" ref="firstCanvas"></canvas>
  </div>
</template>
<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";

  @Component({
      name: 'test-scroll'
  })
  export default class extends Vue {
      mounted() {
          let canvas: any = this.$refs.firstCanvas;
          let context = canvas.getContext('2d')
          var img = new Image;
          img.onload = function(){
              canvas.width = img.width
              canvas.height = img.height
              context.drawImage(this, 0, 0); // Or at whatever offset you like
              debugger
          };
          img.src = 'http://47.110.45.52:8085/static/upload/20191126/8de52a2e12d44c47973fcc260c986761.png';

      }
  }
</script>
