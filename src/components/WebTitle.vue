<template>
  <div class="web-title">图纸管理系统</div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
@Component({
  name: 'web-title'
})
export default class Title extends Vue {

}
</script>
<style>
.web-title {
  position: fixed;
  z-index: 9;
  top: 2rem;
  left: 4rem;
  font-weight: 700;
  font-size: 2rem;
  color: white;
}
</style>
