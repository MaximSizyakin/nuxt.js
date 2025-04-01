export default defineNuxtPlugin({
  name: 'fetch',
  parallel: true,
  async setup() {
    const appFetch = $fetch.create({
      baseURL: 'ocalhost:3001/',
      onRequest({options}) {
        options.headers.append('Accept', 'application/json')
      },
      async onResponseError({response}) {

      }
    })
    return {
      provide: {
        appFetch
      }
    }
  }
})