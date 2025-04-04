<template>
  <div>
    Post ID - {{ id }}
  </div>
  <div>
    Post data:
    <br>
    URL: {{ postData.url }}
    <br>
    TITLE: {{ postData.title }}
    <br>
    CONTENT: {{ postData.content }}
    <br>
    USER: {{ postData.user.id }} - {{ postData.user.login }}
    <hr>
    {{ data }}
  </div>
  <NuxtLink :to="`/posts`">Back to post</NuxtLink>
</template>

<script setup lang="ts">
const {params} = useRoute()
const id = params.id as string

const postData = reactive({
  "url": '',
  "title": '',
  "content": '',
  user: {
    "id": '',
    "login": ''
  }
})

const {data} = await useAppFetch("posts/" + id)

onMounted(() => {
  postData.url = data.value.url
  postData.title = data.value.title
  postData.content = data.value.content
  postData.user.id = data.value.User.id
  postData.user.login = data.value.User.login
})
</script>


