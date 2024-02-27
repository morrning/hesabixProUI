<script lang="ts">
import {defineComponent} from 'vue'
import applicationStore from "../../stores/application";

export default defineComponent({
  name: "business_create",
  computed: {
    applicationStore() {
      return applicationStore
    }
  },
  mounted() {
    this.applicationStore.commit('setTitle','title.user.business_create');
  },
})
</script>

<template>
new business
</template>

<style scoped>

</style>