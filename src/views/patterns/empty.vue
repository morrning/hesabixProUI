<template>
    <v-app class="bg-grey-lighten-5">
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>
</template>
  
<script lang="ts">
  import {defineComponent} from 'vue'
  
  export default defineComponent({
      name: "empty"
  })
</script>

<style>

</style>
  