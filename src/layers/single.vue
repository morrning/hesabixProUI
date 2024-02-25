<script lang="ts">
 export default {
    name:'single',
    data() {return{

    }},
    created() {
      if(localStorage.getItem('isLogedIn') == true){
        this.$router.push('/app/dashboard')
      }
    },
  }
</script>

<template>
  <v-app id="">
    <v-app-bar
        class="px-2"
        color="indigo-darken-4"
        flat
    >
      <v-avatar
          size="32"
          image="/img/favw.png"
      ></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs
          centered
          color="white"
      >
        <v-tab
            prepend-icon="mdi-login"
            :text="$t('user.login')"
            to="/single/login"
        ></v-tab>
        <v-tab
            prepend-icon="mdi-account-plus"
            :text="$t('user.register')"
            to="/single/register"
        ></v-tab>
        <v-tab
            prepend-icon="mdi-lock"
            :text="$t('user.forget_password')"
            to="/single/forget-password"
        ></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>