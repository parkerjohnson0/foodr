import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loggedIn: false,
  }),
  getters: {},
  actions: {
    logIn(): boolean {
      console.log('logged in')
      this.loggedIn = true
      return this.loggedIn
    },
    logOut(): boolean {
      console.log('logged out')
      this.loggedIn = false
      return this.loggedIn
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
