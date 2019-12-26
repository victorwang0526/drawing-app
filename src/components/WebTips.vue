<template>
  <div class="web-tips">
    <div @click="$router.push('/test-scroll')">IP: {{ip}}</div>
    <div>{{currentTime}}</div>
  </div>
</template>
<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import moment from 'moment'
import axios from "axios";

@Component({
  name: 'web-tips'
})
export default class extends Vue {

  currentTime: string = '';
  ip: string = '';

  async mounted() {
    setInterval(() => {
        this.currentTime = moment().format('YYYY-MM-DD hh:mm:ss')
    }, 1000)

    axios.get('http://47.110.45.52:8085/api/task/ip')
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
