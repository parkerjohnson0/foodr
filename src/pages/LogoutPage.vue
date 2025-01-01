<template>
  <div></div>
</template>
<script setup lang="ts">
import { useUserStore } from 'src/stores/user'
import { useRouter } from 'vue-router'
const store = useUserStore()
store.logOut()

const router = useRouter()
router.push('/')
</script>
<style lang="scss" scoped></style>
