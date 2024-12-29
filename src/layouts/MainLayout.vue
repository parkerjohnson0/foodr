<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
      <div class="title">🍔 Foodr 🍔</div>
      <ProfileIcon />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
//import { ref } from 'vue'
import ProfileIcon from 'components/ProfileIcon.vue'
//const profileMenuOpen = ref(false)
</script>

<style lang="scss" scoped>
@import '../css/app.scss';
.title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 8vw;
}
.header {
  background-color: $palette-red;
  height: 10vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-title {
  display: flex;
}
.toolbar {
  display: flex;
  justify-content: center;
}
</style>
