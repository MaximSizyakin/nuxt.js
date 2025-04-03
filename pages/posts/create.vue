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
import {string} from "postcss-selector-parser";

const post = reactive({
  url: '',
  title: '',
  content: ''
})

const userAuthToken = ref('')
onMounted(() => {
  userAuthToken.value = localStorage.getItem("token") || '';
  console.log(userAuthToken.value)
})


const handleForm = async function () {
  try {
    const response = await $fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: {
        "url": post.url,
        "title": post.title,
        "content": post.content
      },
      headers: {
        "Authorization": 'Bearer ' + userAuthToken.value
      }
    })
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}
</script>

