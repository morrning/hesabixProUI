<script lang="ts">
import {defineComponent} from 'vue'
import applicationStore from "../../stores/applicationStore";
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
        calendar:{name:self.$t('pages.create_business.gregorian'),code:'gregorian'},
        dateStart:'',
        dateEnd:'',
        fiscalYearLabel:'',
      },
  }},
  computed: {
    applicationStore() {
      return applicationStore
    }
  },
  watch:{
    'formData.dateEnd': {
      handler: function (after, before) {
        this.formData.fiscalYearLabel = this.$t('pages.create_business.fiscal_year_label_default',{date:this.formData.dateEnd})
      },
      deep: true
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
    async submit(){
      const { valid } = await this.$refs.form.validate()
      if(valid){
        axios.post('app/business/insert',this.formData).then((response)=>{
          if(response.data.error == '200'){
            this.$swal({
              text: this.$t('pages.create_business.created'),
              confirmButtonText: this.$t('dialog.ok'),
              icon:'success'
            }).then(()=>{
              this.$router.push('/user/dashboard');
            });
          }
          else{
            this.$swal({
              text: response.data.message,
              confirmButtonText: this.$t('dialog.ok'),
              icon:'error'
            });
          }
        })
      }
      else{
        this.$swal({
          text: this.$t('dialog.form_not_fill'),
          confirmButtonText: this.$t('dialog.ok'),
          icon:'warning'
        })
      }
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="">
        <v-form fast-fail ref="form" @submit.prevent>
          <v-card :title="$t('pages.create_business.info')" flat>
            <v-row>
              <v-col sm="12" md="6">
                <v-text-field
                    class=""
                    :label="$t('pages.create_business.business_name')"
                    v-model="formData.name"
                    type="text"
                    prepend-icon="mdi-domain"
                    :rules="[() =>formData.name.length > 0 || $t('validator.required')]"
                ></v-text-field>
              </v-col>
              <v-col sm="12" md="6">
                <v-select
                    class=""
                    :label="$t('pages.create_business.country')"
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
                    class=""
                    :label="$t('pages.create_business.address')"
                    v-model="formData.address"
                    type="text"
                    prepend-icon="mdi-map-marker"
                    :rules="[() =>formData.country.code.length > 0 || $t('validator.required')]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
          <v-card :title="$t('pages.create_business.financial_settings')" flat>
            <v-row>
              <v-col sm="12" md="6">
                <v-select
                    class=""
                    :label="$t('pages.create_business.moneys')"
                    :hint="$t('pages.create_business.moneys_hint')"
                    v-model="formData.moneys"
                    prepend-icon="mdi-cash-multiple"
                    :items="moneys"
                    item-title="name"
                    item-value="code"
                    persistent-hint
                    return-object
                    chips
                    multiple
                    :rules="[() =>formData.moneys.length > 0 || $t('validator.required')]"
                ></v-select>
              </v-col>
              <v-col sm="12" md="6">
                <v-select
                    class=""
                    :label="$t('pages.create_business.calender')"
                    v-model="formData.calendar"
                    prepend-icon="mdi-calendar"
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
              <v-col sm="12" md="6">
                <v-text-field
                    prepend-icon="mdi-calendar"
                    readonly
                    :rules="[() =>formData.dateStart.length > 0 || $t('validator.required')]"
                    :label="$t('pages.create_business.fiscal_year_start')"
                    v-model="formData.dateStart" class="txt_calendar1" />
                <CustomDatePicker custom-input=".txt_calendar1" append-to="body" v-model="formData.dateStart" />
              </v-col>
              <v-col sm="12" md="6">
                <v-text-field
                    prepend-icon="mdi-calendar"
                    readonly
                    :rules="[() =>formData.dateEnd.length > 0 || $t('validator.required')]"
                    :label="$t('pages.create_business.fiscal_year_end')"
                    v-model="formData.dateEnd" class="txt_calendar2" />
                <CustomDatePicker custom-input=".txt_calendar2" append-to="body" v-model="formData.dateEnd" :min="formData.dateStart" />
              </v-col>
              <v-col cols="12">
                <v-text-field
                    prepend-icon="mdi-text-box-outline"
                    :label="$t('pages.create_business.fiscal_year_label')"
                    :rules="[() =>formData.fiscalYearLabel.length > 0 || $t('validator.required')]"
                    v-model="formData.fiscalYearLabel" />
              </v-col>
            </v-row>
          </v-card>
          <v-btn @click="submit()" color="primary" prepend-icon="mdi-content-save" :title="$t('pages.create_business.insert_business')">{{$t('pages.create_business.insert_business')}}</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>