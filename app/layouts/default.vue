<template>
  <header>
    Header
  </header>
  <hr>
  <nav>
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/posts">Blog</NuxtLink> |
    <NuxtLink to="/posts/create">Create post</NuxtLink> |
    <NuxtLink to="/auth/login">Login</NuxtLink>
  </nav>
  <hr>
  <main>
    <slot></slot>
  </main>
  <footer>
    <hr>
    Footer
  </footer>
</template>
<script setup lang="ts">
</script>