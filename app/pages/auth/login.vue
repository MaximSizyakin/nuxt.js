<template>
  <div>
    <form>
      Login <input type="text" v-model="form.login">
      <br>
      Password <input type="text" v-model="form.password">
      <br>
      <button @click.prevent="handleForm">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  login: 'admin',
  password: 'password',
})

async function handleForm() {
  try {
    const response = await useNuxtApp().$api.auth.login(form)
    localStorage.setItem('AUTH', response.token)
    document.location = '/'
  } catch (e) {
    console.log(e)
  }
}
</script>