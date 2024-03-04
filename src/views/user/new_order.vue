<script lang="ts">
import {defineComponent} from "vue";
import applicationStore from "../../stores/application";
import axios from "axios";

export default defineComponent({
  computed: {
    applicationStore() {
      return applicationStore
    }
  },
  data(){

    return {
      loading:true,
      business:[],
      formData:{
        business:'',
        days:30
      }
    }
  },
  mounted() {
    this.applicationStore.commit('setTitle','static.new_order');
    axios.get('/app/business/list').then((response)=>{
      this.business = response.data.data;
      if(this.business.length > 0){
        this.formData.business = this.business[0];
      }
      this.loading = false;
    });

  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select :label="$t('static.business')" v-model="formData.business" :items="business" item-title="name" return-object />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>