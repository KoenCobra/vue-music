<script>
import AppHeader from '@/components/AppHeader.vue'
import Auth from '@/components/Auth.vue'
import { useUserStore } from '@/stores/userStore'
import { auth } from '@/includes/firebase'
import Player from '@/components/Player.vue'

export default {
  name: 'App',
  components: { Player, Auth, AppHeader },
  created() {
    if (auth.currentUser) {
      useUserStore().userLoggedIn = true
    }
  }
}
</script>

<template>
  <app-header />
  <router-view></router-view>
  <player></player>
  <auth></auth>
</template>

<style>
.submit-btn {
  background: mediumpurple !important;
}

.back-btn {
  background-color: steelblue !important;
  margin-left: 1rem;
}

.play-btn {
  background-color: white !important;
}
</style>
