<script setup lang="ts">
const {params} = useRoute()
const id = params.id as string

</script>

<template>
  <div>
    {{ id }}
  </div>

</template>

<style scoped>

</style>