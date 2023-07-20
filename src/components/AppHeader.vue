<script>
import { useModalStore } from '@/stores/modalStore'
import { useUserStore } from '@/stores/userStore'
export default {
  name: 'AppHeader',
  methods: {
    useUserStore,
    toggleAuthModal() {
      useModalStore().isOpen = !useModalStore().isOpen
    }
  }
}
</script>

<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        exact-active-class="no-active"
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link :to="{ name: 'about' }" class="px-2 text-white">About</router-link>
          </li>
          <li v-if="!useUserStore().userLoggedIn">
            <a @click.prevent="toggleAuthModal" class="px-2 text-white" href="#"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }">Manage</router-link>
            </li>
            <li>
              <a @click.prevent="useUserStore().signOut()" class="px-2 text-white" href="#"
                >logout</a
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
