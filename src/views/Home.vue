<template>
  <div class="home">
    <web-title></web-title>
    <web-tips></web-tips>
    <ion-grid class="task-full">
      <ion-row class="task-full">
        <ion-col v-for="i in [0, 1, 2]" :key="i" :class="imgClass(i)"
                 @click="openDetail(i)">
          <div class="flex-middle">
            <div class="mid-pic">
              <img :src="'http://47.110.45.52:8085' + getTaskProp(i, 'map1')" class="task-img">
            </div>
            <div class="task-info">
              <div class="task-title">{{getTaskProp(i, 'name')}}</div>
              <div class="task-desc">
                {{getTaskProp(i, 'description')}}
              </div>
            </div>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import WebTitle from '@/components/WebTitle.vue'
import WebTips from "@/components/WebTips.vue";
import axios from "axios";

@Component({
  name: 'home',
  components: {
    HelloWorld,
    WebTitle,
    WebTips,
  }
})
export default class Home extends Vue{

  mounted() {
    axios
      .get('task/task')
      .then((response: any) => {
        this.tasks = response.data.list
      })
  }
  tasks: Array<any> = []

  imgClass(index: number) {
    const ckey = 'task-col-' + (index+1)
    return {
      [ckey]: this.tasks.length > index,
      'task-col-disable': this.tasks.length <= index
    }
  }

  getTaskProp(index: number, key: string) {
    if(index > this.tasks.length -1) {
      return '暂无任务'
    }
    return this.tasks[index][key]
  }

  openDetail(i: number) {
      this.$router.push('/task-detail')
  }
}
</script>
<style>
  .home {
    width: 100%;
    height: 100%;
  }
  .task-full {
    width: 100%;
    height: 100%;
  }
  .task-col-1 {
    background-color: #f8654e;
  }
  .task-col-2 {
    background-color: #f2ab4f;
  }
  .task-col-3 {
    background-color: #8fb131;
  }
  .task-col-disable {
    background-color: #363b3d;
  }
  .task-img {
    height: 50%;
  }
  .task-info {
    color: white;
  }
  .task-title {
    margin-bottom: 30px;
    font-size: 4rem;
    font-weight: 700;
    font-family: roboto slab,helvetica neue,Helvetica,hiragino sans gb,Arial,sans-serif;
  }
  .task-desc {
    min-height: 44px;
    font-size: 2rem;
    width: 80%;
    margin: 0 auto;
  }
  .flex-middle{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
  }
  .mid-pic{
    width: 12rem;
    height: 12rem;
    margin: 0 auto 3rem;
  }
  .mid-pic img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
</style>
