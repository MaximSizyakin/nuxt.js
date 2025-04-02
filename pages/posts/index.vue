<template>
  <h1>Posts page</h1>
  <ul v-if="data">
    <li v-for="product in data">
      <NuxtLink :to="`/posts/${product.id}`">{{ product.title }}</NuxtLink>
    </li>
  </ul>
  <h2 v-else>Error</h2>
  <NuxtLink :to="`/posts/create`">Create post</NuxtLink>
</template>

<script setup lang="ts">
const {data} = await useAppFetch('posts')
console.log(data)

</script>
