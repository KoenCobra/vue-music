<script>
import { useModalStore } from '@/stores/modalStore'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
export default {
  name: 'AppHeader',
  methods: {
    useUserStore,
    toggleAuthModal() {
      useModalStore().isOpen = !useModalStore().isOpen
    },
    signOut() {
      useUserStore().signOut()
      if (this.$route.meta.requiresAuth) router.push({ name: 'home' })
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
            <router-link :to="{ name: 'about' }" class="px-2 text-white">{{
              $t('header.about')
            }}</router-link>
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
              <a @click.prevent="signOut" class="px-2 text-white" href="#">logout</a>
            </li>
          </template>
        </ul>
        <div class="ml-auto">
          <!--          <a href="#" class="px-2 text-white" @click.prevent="changeLocale">-->
          <!--            {{ currentLocale }}-->
          <!--          </a>-->
          <select v-model="$i18n.locale">
            <option value="nl">Nederlands</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
