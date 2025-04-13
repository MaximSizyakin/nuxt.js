import {createAuthRepository} from "~/repository/auth";
import {createPostsRepository} from "~/repository/posts";

export default defineNuxtPlugin({
  name: 'fetch',
  parallel: true,
  async setup() {
    const config = useRuntimeConfig()

    const appFetch = $fetch.create({
      baseURL: config.public.apiBaseUrl,
      onRequest({options}) {
        options.headers.append('Accept', 'application/json')

        if (import.meta.browser) {
          let token: string | null = localStorage.getItem('AUTH')

          if (token) {
            options.headers.append('Authorization', `Bearer ${token}`)
          }
        }

      },
      async onResponseError({response}) {

      }
    })

    const api = {
      auth: createAuthRepository(appFetch),
      posts: createPostsRepository(appFetch)
    }

    return {
      provide: {
        appFetch,
        api
      }
    }
  }
})