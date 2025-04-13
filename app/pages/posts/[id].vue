<template>
  <div>
    <h1>{{ post.title }}</h1>
  </div>
  <div v-if="comments.data.value">
    <h2>Comment</h2>
    <pre>
        {{ comments.data }}
      </pre>
  </div>
  <div v-if="images.data.value">
    <h2>Images</h2>
    <pre>
        {{ images.data }}
      </pre>
  </div>
  <NuxtLink :to="`/posts`">Back to post</NuxtLink>
</template>

<script setup lang="ts">
import type {Post} from "~/repository/posts";

const {params} = useRoute()
const id = params.id as string

const post = await useNaiveFetch<Post>(`posts/${id}`)

const [comments, images] = await Promise.all([
  useAppFetch<any>(`/comments/post/${post.value.id}`),
  useAppFetch<any>(`/images/post/${post.value.id}`)
])
</script>


