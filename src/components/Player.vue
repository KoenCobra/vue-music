<script>
import { usePlayerStore } from '@/stores/player'

export default {
  name: 'Player',
  methods: {
    usePlayerStore
  }
}
</script>

<template>
  <div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
    <!-- Track Info -->
    <div class="text-center" v-if="usePlayerStore().current_song.modified_name">
      <span class="song-title font-bold">{{ usePlayerStore().current_song.modified_name }}</span>
      By
      <span class="song-artist">{{ usePlayerStore().current_song.display_name }}</span>
    </div>
    <div class="flex flex-nowrap gap-4 items-center">
      <!-- Play/Pause Button -->
      <button type="button" @click.prevent="usePlayerStore().toggleAudio()">
        <i
          class="fa text-gray-500 text-xl"
          :class="usePlayerStore().playing ? 'fa-pause' : 'fa-play'"
        ></i>
      </button>
      <!-- Current Position -->
      <div class="player-currenttime">{{ usePlayerStore().seek }}</div>
      <!-- Scrub Container  -->
      <div
        @click.prevent="usePlayerStore().updateSeek()"
        class="w-full h-2 rounded bg-gray-200 relative cursor-pointer"
      >
        <!-- Player Ball -->
        <span
          class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
          :style="{ left: usePlayerStore().playerProgress }"
        >
          <i class="fas fa-circle"></i>
        </span>
        <!-- Player Progress Bar-->
        <span
          class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
          :style="{ width: usePlayerStore().playerProgress }"
        ></span>
      </div>
      <!-- Duration -->
      <div class="player-duration">{{ usePlayerStore().duration }}</div>
    </div>
  </div>
</template>

<style scoped></style>
