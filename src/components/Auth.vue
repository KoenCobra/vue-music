﻿<script>
import { useModalStore } from '@/stores/modalStore'
import LoginForm from '@/components/loginForm.vue'
import RegisterForm from '@/components/registerForm.vue'

export default {
  name: 'Auth',
  components: { RegisterForm, LoginForm },
  methods: {
    useModalStore,
    closeModal() {
      useModalStore().isOpen = false
    }
  },
  data() {
    return {
      tab: 'login'
    }
  }
}
</script>

<template>
  <transition name="fade">
    <div v-if="useModalStore().isOpen" class="fixed z-10 inset-0 overflow-y-auto" id="modal">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div @click="closeModal" class="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <!-- Add margin if you want to see some of the overlay behind the modal-->
          <div class="py-4 text-left px-6">
            <!--Title-->
            <div class="flex justify-between items-center pb-4">
              <p class="text-2xl font-bold">Your Account</p>
              <!-- Modal Close Button -->
              <div @click="closeModal" class="modal-close cursor-pointer z-50">
                <i class="fas fa-times"></i>
              </div>
            </div>

            <!-- Tabs -->
            <ul class="flex flex-wrap mb-4">
              <li class="flex-auto text-center">
                <a
                  class="block rounded py-3 px-4 transition"
                  :class="{
                    'hover:text-white text-white bg-blue-600': tab === 'login',
                    'hover:text-blue-600': tab === 'register'
                  }"
                  href="#"
                  @click.prevent="tab = 'login'"
                  >Login</a
                >
              </li>
              <li class="flex-auto text-center">
                <a
                  @click.prevent="tab = 'register'"
                  class="block rounded py-3 px-4 transition"
                  :class="{
                    'hover:text-white text-white bg-blue-600': tab === 'register',
                    'hover:text-blue-600': tab === 'login'
                  }"
                  href="#"
                  >Register</a
                >
              </li>
            </ul>

            <login-form v-if="tab === 'login'" />
            <register-form v-else />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
