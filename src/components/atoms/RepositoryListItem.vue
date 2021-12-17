<template>
  <div class="p-10 transition duration-300 transform bg-white cursor-pointer rounded-3xl hover:shadow-card group">
    <div class="flex items-center" @click="toggleGraph">
      <div class="flex flex-col flex-grow gap-3 lg:gap-2">
        <div class="flex items-center gap-2 group-hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="16" cy="12" r="1" />
            <circle cx="12" cy="8" r="1" />
            <circle cx="12" cy="16" r="1" />
            <path d="M12 15v-6" />
            <path d="M15 11l-2 -2" />
            <path d="M11 7l-1.9 -1.9" />
            <path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z" />
          </svg>
          <strong class="text-left">{{repository.full_name}}</strong>
        </div>
        <p class="flex-grow text-left">
          {{repository.description}}
        </p>
        <div class="flex gap-8">
          <div class="flex items-center leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
            {{repository.stargazers_count}}
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="18" r="2" />
              <circle cx="7" cy="6" r="2" />
              <circle cx="17" cy="6" r="2" />
              <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
              <line x1="12" y1="12" x2="12" y2="16" />
            </svg>
            {{repository.forks_count}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: {
    repository: {
      type: Object,
      required: true
    }
  },
}
</script>
