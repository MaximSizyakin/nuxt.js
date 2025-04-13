<template>
  <h1>Blog</h1>
  <ul v-if="data">
    <li v-for="post in data">
      <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
    <li>
      <NuxtLink :to="`/posts/0`">Wrong Sample</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">

const {data, error} = await useAsyncData(() => useNuxtApp().$api.posts.all())

</script>
