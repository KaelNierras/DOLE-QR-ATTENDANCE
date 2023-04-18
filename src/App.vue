<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute() 
const showSidebar = computed(() => route.name != 'login')
</script>

<template>
 
  <main>
    <router-view />
  </main>
</template>

<style scoped>

</style>
