<script lang="ts">
  import {defineComponent} from "vue";
  import applicationStore from "../../stores/application";

  export default defineComponent({
    name:'dashboard',
    computed: {
      applicationStore() {
        return applicationStore
      }
    },
    data(){
      return {

      }
    },
    mounted() {
        this.applicationStore.commit('setTitle','title.user.businesses');
        // alert($this.applicationStore().state.title)
    }
  });
</script>

<template>
{{applicationStore.state.title}}
</template>

<style scoped>

</style>