<script lang="ts">
import {defineComponent} from 'vue'
import applicationStore from "../../stores/application";
import axios from "axios";
import HDatePicker from "@/components/forms/Hdatepicker.vue";

export default defineComponent({
  name: "business_create",
  components: {
    HDatePicker

  },
  data(){
    const self = this;
    return{
      loading:true,
      countries:[],
      moneys:[],
      calendars:[
        {name:self.$t('pages.create_business.gregorian'),code:'gregorian'},
        {name:self.$t('pages.create_business.shamsi'),code:'shamsi'},
        {name:self.$t('pages.create_business.ghamari'),code:'ghamari'}
      ],
      formData:{
        name:'',
        country:{
          label:'',
          code:'',
        },
        moneys:[],
        address:'',
        calendar:'',
        dateStart:'',
        dateEnd:''
      }
  }},
  computed: {
    applicationStore() {
      return applicationStore
    }
  },
  mounted() {
    this.applicationStore.commit('setTitle','title.user.business_create');
    //get countries
    axios.get('/api/country/list').then((response)=>{
      this.countries = response.data.data;
      this.formData.country = this.countries[0];
    });
    //get moneys
    axios.get('/api/money/list').then((response)=>{
      this.moneys = response.data.data;
    });
  },
  methods:{
    ff(){
      console.log(this.formData.dateStart)
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="">
        <v-form fast-fail ref="form" @submit.prevent>
          <v-stepper
              alt-labels
              :items="[$t('pages.create_business.info'),$t('pages.create_business.financial_settings'),$t('pages.create_business.preview')]"
          >
            <template v-slot:item.1>
              <v-card :title="$t('pages.create_business.info')" flat>
                <v-row>
                  <v-col sm="12" md="6">
                    <v-text-field
                        class="mb-2"
                        :label="$t('pages.create_business.business_name')"
                        single-line
                        v-model="formData.name"
                        type="text"
                        prepend-icon="mdi-domain"
                        :rules="[() =>formData.name.length > 0 || $t('validator.required')]"
                    ></v-text-field>
                  </v-col>
                  <v-col sm="12" md="6">
                    <v-select
                        class="mb-2"
                        :label="$t('pages.create_business.country')"
                        single-line
                        v-model="formData.country"
                        prepend-icon="mdi-flag"
                        :items="countries"
                        item-title="label"
                        item-value="code"
                        persistent-hint
                        return-object
                    ></v-select>
                  </v-col>
                  <v-col sm="12" md="12">
                    <v-text-field
                        class="mb-2"
                        :label="$t('pages.create_business.address')"
                        single-line
                        v-model="formData.address"
                        type="text"
                        prepend-icon="mdi-map-marker"
                        :rules="[() =>formData.country.code.length > 0 || $t('validator.required')]"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </template>

            <template v-slot:item.2>
              <v-card :title="$t('pages.create_business.financial_settings')" flat>
                <v-row>
                  <v-col sm="12" md="6">
                    <v-select
                        class="mb-2"
                        :label="$t('pages.create_business.moneys')"
                        :hint="$t('pages.create_business.moneys_hint')"
                        single-line
                        v-model="formData.moneys"
                        prepend-icon="mdi-cash-multiple"
                        :items="moneys"
                        item-title="name"
                        item-value="code"
                        persistent-hint
                        return-object
                        chips
                        multiple
                    ></v-select>
                  </v-col>
                  <v-col sm="12" md="6">
                    <v-select
                        class="mb-2"
                        :label="$t('pages.create_business.calender')"
                        single-line
                        v-model="formData.calendar"
                        prepend-icon="mdi-cash-multiple"
                        :items="calendars"
                        item-title="name"
                        item-value="code"
                        return-object
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <h3 class="ms-5">{{$t('pages.create_business.fiscal_year')}}</h3>
                  </v-col>
                  <CustomDatePicker append-to="body" v-model="formData.dateStart" />

                </v-row>
              </v-card>
            </template>

            <template v-slot:item.3>
              <v-card :title="$t('pages.create_business.preview')" flat>...</v-card>
            </template>
          </v-stepper>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>