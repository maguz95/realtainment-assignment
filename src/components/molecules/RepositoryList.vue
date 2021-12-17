<template>
  <div class="grid w-full grid-flow-row gap-8 lg:w-3/4">
    <repository-list-item v-for="repository in repositories" :repository="repository" :key="repository.id" />
  </div>
</template>

<script>
import RepositoryListItem from '@/components/atoms/RepositoryListItem.vue'
export default {
  name: 'RepositoryList',
  props: {
    repositories: {
      type: Array,
      required: true
    }
  },
  components: { RepositoryListItem },
}
</script>
