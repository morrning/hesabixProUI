<script lang="ts">
import {defineComponent} from 'vue'
import applicationStore from "../../stores/application";

export default defineComponent({
  name: "change_password",
  computed: {
    applicationStore() {
      return applicationStore
    }
  },
  mounted() {
    this.applicationStore.commit('setTitle','user.change_password');
  },
})
</script>

<template>
ffff
</template>

<style scoped>

</style>