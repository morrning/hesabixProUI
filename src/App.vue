<script lang="ts">
  import {defineComponent} from 'vue'
  import axios from "axios";
  import {useUserStore} from "@/stores/userStore";
  export default defineComponent({
    name: "App",
    data() {
      const self = this;
      return{
      currentUser:useUserStore()
    }},
    mounted() {
        this.currentUser.refresh();
    },
  });
</script>

<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>

</template>

<style>
@import "../node_modules/vazirmatn/misc/Farsi-Digits/Vazirmatn-FD-font-face.css";
body{
  font-family: "Vazirmatn FD",sans-serif;
}
</style>
