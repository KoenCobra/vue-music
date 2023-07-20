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
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!useUserStore().userLoggedIn">
            <a @click.prevent="toggleAuthModal" class="px-2 text-white" href="#"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
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
