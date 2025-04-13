export function createAuthRepository(appFetch: typeof $fetch){
  return {
    login(body: LoginStore){
      return appFetch<LoginStoreResponse>('/auth/login', {
        method: 'post',
        body
      });
    }
  }
}

export interface User {
  id: number
  login: string
}

export interface LoginStore {
  login: string
  password: string
}

export interface LoginStoreResponse {
  token: string
  user: User // incorrect, user has additional fields
}