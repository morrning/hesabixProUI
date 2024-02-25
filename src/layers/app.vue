<script lang="ts">
export default {
  name:'app',
  data() {return{

  }},
  created() {
    if(localStorage.getItem('isLogedIn') != true){
      this.$router.push('/single/login')
    }
  },
}
</script>

<template>
  patterns file
<RouterView />
</template>

<style scoped>

</style>