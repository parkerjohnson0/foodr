<template>
  <!-- <img class="mouse-pointer" @click="() => (clicked = !clicked)" src="/icons/default-user.png" /> -->
  <span :id="id" class="pi pi-user profile-icon" v-on:click="show = !show"></span>
  <!-- <Transition name="slide"> -->
  <ProfileMenu :show="show" />
  <!-- </Transition> -->
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import ProfileMenu from './ProfileMenu.vue'
const show = ref(false)
const id = 'profile-icon'
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeMount(() => {
  document.removeEventListener('click', handleClickOutside)
})

function handleClickOutside(ev: Event) {
  const el = ev.target as HTMLElement
  if (el.id !== id) {
    show.value = false
  }
}
</script>
<style scoped>
.profile-icon {
  font-size: 6vw;
  display: inline-block;
  position: absolute;
  right: 5vw;
  cursor: pointer;
}
</style>
