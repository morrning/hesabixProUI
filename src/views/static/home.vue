<script lang="ts">
import {defineComponent} from 'vue'
import {useUserStore} from "@/stores/user";
//vue rotate spinner
export default defineComponent({
  name: "home",
  data:()=>{return{

  }},
  beforeMount() {
    //check user is login or not
    if(localStorage.getItem('isLogedIn') == true){
      this.$router.push('/app/dashboard');
    }
    else{
      this.$router.push('/single/login');
    }
  },
})
</script>
<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col md="5">
        <v-card prepend-icon="mdi-circle" :title="$t('app.name')" :subtitle="$t('app.loading')">
          <template v-slot:prepend>
            <v-avatar
                size="32"
                image="/img/logo-blue.png"
            ></v-avatar>
          </template>
          <v-card-text align="center">
            <v-progress-circular
                color="primary"
                indeterminate
                :size="100"
                :width="12"
            ></v-progress-circular>
            <p>
              <v-label class="mt-6" color="primary">{{ $t('app.please_wait') }}</v-label>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>