<template>
  <div class="web-tips">时间、IP</div>
</template>
<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component({
  name: 'web-tips'
})
export default class extends Vue {

}
</script>
<style>
.web-tips {
  position: fixed;
  z-index: 9;
  top: 2rem;
  right: 4rem;
  font-weight: 700;
  font-size: 1rem;
  color: lightgray;
}
</style>
