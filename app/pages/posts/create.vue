<template>
  <div>
    <form>
      Url <input type="text" v-model="post.url">
      <br>
      Title <input type="text" v-model="post.title">
      <br>
      Content <input type="text" v-model="post.content">
      <br>
      <button @click.prevent="handleForm">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const post = reactive({
  url: '',
  title: '',
  content: ''
})

const handleForm = async function () {
  try {
    const response = await useNuxtApp().$api.posts.add(post)
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}
</script>

