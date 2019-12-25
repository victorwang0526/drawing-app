<template>
  <div class="home">
    <ion-grid class="task-full">
      <ion-row class="task-full">
        <ion-col v-for="i in [0, 1, 2]" :key="i" :class="imgClass(i)"
                 @click="openDetail(i)">
          <div style="height: 50%;">
            <img src="../assets/1.png" class="task-img">
          </div>
          <div style="height: 50%;" class="task-info">
            <div class="task-title">{{getTaskProp(i, 'name')}}</div>
            <div class="task-desc">
              {{getTaskProp(i, 'description')}}
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

@Component({
  name: 'home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue{
  tasks: Array<any> = [
    {img: 'assets/1.png', name: '任务1', description: '任务描述1', seq: 1},
    {img: 'assets/1.png', name: '任务2', description: '任务描述2', seq: 2},
    {img: 'assets/1.png', name: '任务3', description: '任务描述3', seq: 2},
  ]

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
    font-size: 2em;
    font-weight: 700;
    font-family: roboto slab,helvetica neue,Helvetica,hiragino sans gb,Arial,sans-serif;
  }
  .task-desc {
    min-height: 44px;
    font-size: 1em;
    width: 80%;
    margin: 0 auto;
  }
</style>
