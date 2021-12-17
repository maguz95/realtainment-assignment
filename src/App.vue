<template>
  <div class="flex flex-col items-center min-h-screen p-10 bg-gray-100">
    <h1 class="text-3xl font-semibold">Github repository index</h1>
    <p class="mt-4">Search your favourite repositories and view the contributions' graph</p>
    <search-input @change="searchSetup"></search-input>
    <div v-if="isFirstLoad" class="">
      Please fill the input field first
    </div>
    <template v-else-if="!isFirstLoad && repositories.length > 0">
      <repository-list :repositories="repositories"/>
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

export default {
  name: 'Home',
  components: {
    SearchInput,
    RepositoryList,
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
    const isFirstLoad = ref(true)
    const fetchRepositories = (pageNumber) =>{
      isLoading.value = true
      axios.get(`https://api.github.com/search/repositories?q=${searchQuery.value}&page=${pageNumber}&per_page=30`)
        .then(response => {
          repositories.value = response.data.items
          isFirstLoad.value = false
        })
    }
    return {
      searchSetup,
      repositories,
      isFirstLoad,
      fetchRepositories,
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

}
</style>
