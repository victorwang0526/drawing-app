<template>
  <div class="web-tips">{{ip}}</div>
</template>
<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import axios from "axios";

@Component({
  name: 'web-tips'
})
export default class extends Vue {

  ip: string = '';
  mounted() {
    axios
      .get('task/ip')
      .then((response: any) => {
        (this.ip = response.data)
      })
  }
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
