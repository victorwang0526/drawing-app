<template>
  <div class="task-detail">
    <back-button></back-button>
    <ion-grid style="width: 100%; height: 100%;">
      <ion-row style="height: 100%; width: 100%;">
        <ion-col>
          <ion-segment>
            <ion-segment-button value="tz" checked>
              <ion-label>图纸</ion-label>
            </ion-segment-button>
          </ion-segment>
          <drawing :cid="'tz1'" :imgUrl="task.map1" :w="w" :h="h"></drawing>
        </ion-col>
        <ion-col>
          <ion-segment color="success" @ionChange="tab2Change($event)">
            <ion-segment-button v-if="task.map2 !== ''" value="t21" checked><ion-label>工艺图纸</ion-label></ion-segment-button>
            <ion-segment-button v-if="task.map3 !== ''" value="t22"><ion-label>操作图纸</ion-label></ion-segment-button>
            <ion-segment-button v-if="task.map4 !== ''" value="t23"><ion-label>操作图纸2</ion-label></ion-segment-button>
          </ion-segment>
          <drawing v-if="task.map2 !== ''" v-show="tab2Actived === 't21'" :cid="'tz21'" :imgUrl="task.map2" :w="w" :h="h"></drawing>
          <drawing v-if="task.map3 !== ''" v-show="tab2Actived === 't22'" :cid="'tz22'" :imgUrl="task.map3" :w="w" :h="h"></drawing>
          <drawing v-if="task.map4 !== ''" v-show="tab2Actived === 't23'" :cid="'tz23'" :imgUrl="task.map4" :w="w" :h="h"></drawing>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>
<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import Drawing from '@/components/Drawing.vue'
import BackButton from "@/components/BackButton.vue";

@Component({
    name: 'task-detail',
    components: {
        Drawing,
        BackButton
    }
})
export default class TaskDetail extends Vue {

  tab2Actived: string = '';
  w: any = 0
  h: any = 0
  hh: number = 0
  task: any = {
      map1: '',
      map2: '',
      map3: '',
      map4: ''
  };
  beforeMount() {

    this.w = Number.parseInt(this.$route.params.w) / 2 - 15
    this.h = Number.parseInt(this.$route.params.h) - 65
    this.tab2Actived = 't21'
    this.task = this.$route.params.task
  }
  mounted() {
  }
    goBack() {
        this.$router.back()
    }
    tab2Change(ev: any) {
        this.tab2Actived = ev.detail.value
    }
}
</script>
<style scoped>
.task-detail {
  width: 100%;
  height: 100%;
}
</style>
