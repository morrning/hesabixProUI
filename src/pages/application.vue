<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "application",

})
</script>

<template>
application layer
<RouterView />
</template>

<style scoped>

</style>
<route>
  {
    meta: {
      layout: "second"
    }
  }
</route>
