<template>
  <div class="web-tips">
    <div>IP: {{ip}}</div>
    <div>{{currentTime}}</div>
  </div>
</template>
<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import moment from 'moment'
import { Plugins } from '@capacitor/core';

const { Network, Device } = Plugins;
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

    const info = await Device.getInfo();
    console.log(info);
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
