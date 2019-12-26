<template>
  <ion-button fill="clear" size="large" class="back-btn" @click="goBack()">
    <ion-icon slot="icon-only" name="close"></ion-icon>
  </ion-button>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

@Component({
    name: 'back-button'
})
export default class extends Vue {
    goBack() {
        this.$router.back()
    }
}
</script>
<style>
.back-btn {
  position: fixed;
  z-index: 99;
  top: .2rem;
  left: 2rem;
}
</style>
