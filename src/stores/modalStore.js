import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    isOpen: false
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? 'hidden' : ''
    }
  }
})
