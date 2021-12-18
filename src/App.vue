<template>
  <modal :show="isLoading" fixed>
    <p class="text-2xl">Please wait while we fetch the repositories...</p>
  </modal>
  <modal :show="isError" @close="handleError">
    <p class="text-2xl text-center">Something went terribly wrong. <br>Please try again with a different keyword :)</p>
  </modal>
  <div class="flex flex-col items-center min-h-screen p-10 bg-gray-100">
    <h1 class="text-3xl font-semibold">Github repository index</h1>
    <p class="mt-4">Search your favourite repositories and view the contributions' graph</p>
    <search-input @change="searchSetup"></search-input>
    <div v-if="isFirstLoad" class="">
      Please fill the input field first
    </div>
    <template v-else-if="!isFirstLoad && repositories.length > 0">
      <repository-list :repositories="repositories"/>
      <pagination
        class="mt-10"
        v-if="repositories.length > 0"
        :itemsAmount="totalRepositories"
        :itemsPerPage="30"
        @change-page="fetchRepositories" />
    </template>
    <div v-else>
      There are no repositories to show, please try with a new search
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { ref } from '@vue/reactivity'
import SearchInput from '@/components/atoms/SearchInput.vue'
import RepositoryList from '@/components/molecules/RepositoryList.vue'
import Pagination from '@/components/molecules/Pagination.vue'
import Modal from '@/components/molecules/Modal.vue'

export default {
  components: {
    Modal,
    SearchInput,
    RepositoryList,
    Pagination
  },
  setup() {
    // Search input setup
    const searchQuery = ref('')
    const searchSetup = (e) => {
      searchQuery.value = e.target.value
      fetchRepositories(1)
    }

    // Fetch repositories
    const repositories = ref([])
    const totalRepositories = ref(0)
    const isLoading = ref(false)
    const isFirstLoad = ref(true)
    const isError = ref(false)
    const fetchRepositories = (pageNumber) =>{
      isLoading.value = true
      axios.get(`https://api.github.com/search/repositories?q=${searchQuery.value}&page=${pageNumber}&per_page=30`)
        .then(response => {
          repositories.value = response.data.items
          totalRepositories.value = response.data.total_count
          isFirstLoad.value = false
          isLoading.value = false
        })
        .catch(() => {
          isLoading.value = false
          isError.value = true
        })
    }

    // Handle error modal close event
    const handleError = () => {
      searchQuery.value = ''
      isError.value = false
    }

    return {
      searchSetup,
      repositories,
      totalRepositories,
      isLoading,
      isFirstLoad,
      isError,
      fetchRepositories,
      handleError
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.icon{
  @apply w-5 h-5
}
</style>
