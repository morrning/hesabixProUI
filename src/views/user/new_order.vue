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
    const self = this;
    return {
      loading:true,
      business:[],
      months:[
        {value:1, label: self.$t('time.month',{id:1})},
        {value:2, label: self.$t('time.month',{id:2})},
        {value:3, label: self.$t('time.month',{id:3})},
        {value:6, label: self.$t('time.month',{id:6})},
        {value:9, label: self.$t('time.month',{id:9})},
        {value:12, label: self.$t('time.month',{id:12})}
      ],
      gatePays:[
        {value:'shetab', label: self.$t('gate_pays.shetab')},
        {value:'usdt', label: self.$t('gate_pays.usdt')},
        {value:'paypal', label: self.$t('gate_pays.paypal')},
        {value:'prefect_money', label: self.$t('gate_pays.perfect_money')},
        {value:'bitcoin', label: self.$t('gate_pays.bitcoin')},
      ],
      formData:{
        business:'',
        month:'',
        gate_pay:''
      }
    }
  },
  mounted() {
    this.applicationStore.commit('setTitle','static.new_order');
    this.formData.month = this.months[0];
    this.formData.gate_pay = this.gatePays[0];
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
      <v-col>
        <v-select :label="$t('static.charge_time')" v-model="formData.month" :items="months" item-title="label" return-object />
      </v-col>
      <v-col>
        <v-select :label="$t('static.charge_time')" v-model="formData.gate_pay" :items="gatePays" item-title="label" return-object />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>