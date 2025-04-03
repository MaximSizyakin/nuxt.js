<template>
  <div>
    <form>
      Login <input type="text" v-model="user.login">
      <br>
      Password <input type="text" v-model="user.password">
      <br>
      <button @click.prevent="handleForm">Submit</button>
    </form>
  </div>
  <div>
    <p>Token: {{ user.token }}</p>
  </div>
</template>

<script setup lang="ts">
const user = reactive({
  login: 'admin',
  password: 'password',
  token: ''
})

const handleForm = async function () {
  try {
    const response = await $fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      body: {
        "login": user.login,
        "password": user.password,
      }
    })
    console.log(response.token)
    user.token = response.token
    localStorage.setItem('token', user.token)
  } catch (e) {
    console.log(e)
  }
}
</script>