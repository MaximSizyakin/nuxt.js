<template>
  <div>
    <form>
      <input type="text" v-model="post.url">
      <br>
      <input type="text" v-model="post.title">
      <br>
      <input type="text" v-model="post.content">
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
    const response = await $fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: {
        "url": post.url,
        "title": post.title,
        "content": post.content
      }
    })
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}


</script>

