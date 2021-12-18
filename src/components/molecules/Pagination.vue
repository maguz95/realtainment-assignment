<template>
  <div class="flex items-center gap-2">
    <button v-if="page > 1" @click="changePage('previous')">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="9" y2="16" />
        <line x1="5" y1="12" x2="9" y2="8" />
      </svg>
    </button>
    Page {{ currentPage }} of {{ pagesAmount }}
    <button @click="changePage('next')">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="15" y1="16" x2="19" y2="12" />
        <line x1="15" y1="8" x2="19" y2="12" />
      </svg>
    </button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'

export default {
  name: 'BasicNavigation',
  props: {
    itemsAmount: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
  },
  emits: ['change-page'],
  setup (props, context) {
    const currentPage = ref(1)

    // Calculate the amount of pages
    const pagesAmount = computed(() => {
      return Math.ceil(props.itemsAmount / props.itemsPerPage)
    })

    // Change page and emit event
    const changePage = (direction) => {
      if (direction === 'next') {
        if (currentPage.value < pagesAmount.value) {
          currentPage.value++
        }
      } else {
        if (currentPage.value > 1) {
          currentPage.value--
        }
      }
      context.emit('change-page', currentPage.value)
    }

    return {currentPage, pagesAmount, changePage}
  }
}
</script>