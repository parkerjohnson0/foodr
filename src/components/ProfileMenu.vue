<template>
  <div class="profile-container">
    <Transition name="slide">
      <ul v-if="props.show" class="profile-menu">
        <li
          class="dropdown-item"
          v-bind:style="{
            display: route.path === item.link ? 'none' : 'block',
          }"
          v-for="item in listItems"
          :key="item.text"
          v-on:click="$router.push(item.link)"
        >
          <i :class="item.className" class="dropdown-image" />
          <span class="dropdown-text">
            {{ item.text }}
          </span>
        </li>
      </ul>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import type { ProfileMenuOption } from './models'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps({
  show: Boolean,
})
const listItems: ProfileMenuOption[] = [
  {
    text: 'Home',
    className: 'pi pi-home',
    link: '/',
    active: false,
  },
  {
    text: 'Profile',
    className: 'pi pi-user',
    link: '/profile',
    active: true,
  },
  {
    text: 'Logout',
    className: 'pi pi-sign-out',
    link: '/logout',
    active: true,
  },
]
</script>

<style lang="scss" scoped>
@import '../css/app.scss';
.slide-enter {
  transition: 5.2s;
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.25s;
}
.slide-enter {
  transform: translate(0, 100%);
}
.slide-leave-to {
  transform: translate(0, -100%);
  margin-bottom: -50%;
  transition-delay: 2ms;
}
.dropdown-image {
  font-size: 4vw;
}
.dropdown-item {
  list-style: none;
  padding: 1vw;
  cursor: pointer;
}
ul i {
  margin-right: 1vw;
}
.profile-container:empty {
  display: none;
}
.profile-container {
  position: absolute;
  overflow: hidden;
  justify-content: space-between;
  display: flex;
  width: 25vw;
  right: 0px;
  top: 10vw;
  color: $palette-black;
  border-left: solid;
  border-bottom: solid;
  border-color: $palette-red;
  background-color: $palette-white;
  border-bottom-left-radius: 2rem;
}
.profile-menu {
  padding-inline-start: 0;
  align-items: flex-start;
  padding-left: 5vw;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}
.dropdown-text {
  font-family: Poppins;
}
</style>
