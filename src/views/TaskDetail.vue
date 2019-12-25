<template>
  <div class="task-detail">
    <ion-grid style="width: 100%; height: 100%;">
      <ion-row style="height: 100%; width: 100%;">
        <ion-col>
          <ion-segment>
            <ion-segment-button value="tz" checked>
              <ion-label>图纸</ion-label>
            </ion-segment-button>
          </ion-segment>
          <drawing></drawing>
        </ion-col>
        <ion-col>
          <ion-segment color="success" @ionChange="tab2Change($event)">
            <ion-segment-button value="t1" checked>
              <ion-label>工艺图纸</ion-label>
            </ion-segment-button>
            <ion-segment-button value="t2"><ion-label>操作图纸</ion-label></ion-segment-button>
          </ion-segment>
          <drawing></drawing>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>
<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import Drawing from '@/components/Drawing.vue'

@Component({
    name: 'task-detail',
    components: {
        Drawing
    }
})
export default class TaskDetail extends Vue {

    tab2Actived: string = 't1';

    tab2Change(ev: any) {
        this.tab2Actived = ev.detail.value
        console.log(`${this.tab2Actived}`)
    }
}
</script>
<style scoped>
.task-detail {
  width: 100%;
  height: 100%;
}
</style>
