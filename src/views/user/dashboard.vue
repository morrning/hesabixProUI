<script lang="ts">
  import {defineComponent} from "vue";
  import applicationStore from "../../stores/application";
  import axios from "axios";

  export default defineComponent({
    name:'dashboard',
    data(){
      const self = this;
      return {
        loading: true,
        business:[],
        calendars:[
          {name:self.$t('pages.create_business.gregorian'),code:'gregorian'},
          {name:self.$t('pages.create_business.shamsi'),code:'shamsi'},
          {name:self.$t('pages.create_business.ghamari'),code:'ghamari'}
        ],
        formData:{
          money:{},
          calendar:{},
          bid:{}
        }
      }
    },
    computed: {
      applicationStore() {
        return applicationStore
      }
    },
    mounted() {
        this.applicationStore.commit('setTitle','title.user.businesses');
        axios.get('/app/business/list').then((response)=>{
          this.business = response.data.data;
          this.loading = false;
        })
    },
    watch:{
      'formData.bid': {
        handler: function (after, before) {
          if(after != undefined){
            this.formData.calendar = this.$t('calendar.' + after.calendar);
            this.formData.money = after.moneys[0];
          }
        },
        deep: true
      }
    },
    methods:{
      submit(){
        this.loading = true;
        this.$router.push('/app/dashboard')
      },
      expireColorCheck(bus:any){
        if(bus.validTime == 0) return { color:"dangerLight"}
        return {}
      }
    }
  });
</script>

<template>
  <v-container>
    <v-row v-if="business.length === 0 && !loading">
      <v-col>
        <v-alert
            border="top"
            border-color="success"
            elevation="2"
        >
          <v-container>
            <v-row>
              <v-col cols="12">
                {{$t('pages.dashboard.no_business_alert')}}
              </v-col>
              <v-col>
                <v-btn color="primary" title="ggg" to="/user/new-business" prepend-icon="mdi-archive-plus">{{$t('title.user.business_create')}}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels on-update:model-value="setDefaults()" v-model="formData.bid">
          <v-expansion-panel
              v-for="(bus,index) in business"
              :value="bus"
              v-bind="expireColorCheck(bus)"
          >
            <template v-slot:title>
              <v-row >
                <v-col class="d-flex align-center">
                  <v-icon class="me-2">mdi-domain</v-icon>
                  {{bus.name}}
                </v-col>
                <v-col class="d-flex align-center">
                  <v-btn v-if="bus.validTime > 9" color="primary">{{$t('pages.dashboard.remainingDays',{days:bus.validTime})}}</v-btn>
                  <v-btn v-else-if="bus.validTime <= 9 && bus.validTime != 0" color="yellow">{{$t('pages.dashboard.remainingDays',{days:bus.validTime})}}</v-btn>
                  <v-btn v-else color="danger">{{$t('pages.dashboard.businessExpireLabel')}}</v-btn>

                </v-col>
              </v-row>
            </template>
            <template v-slot:text>
              <v-row v-if="bus.validTime != 0">
                <v-col>
                  <v-select
                      :items="bus.moneys"
                      v-model="formData.money"
                      item-title="name"
                      item-value="props"
                      :label="$t('pages.dashboard.money')"
                      return-object
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                      :items="calendars"
                      v-model="formData.calendar"
                      item-title="name"
                      item-value="props"
                      :label="$t('pages.create_business.calender')"
                      return-object
                  ></v-select>
                </v-col>
                <v-col>
                  <v-btn color="primary" prepend-icon="mdi-text" size="x-large" block :loading="loading" @click="submit()">
                    {{$t('pages.dashboard.login')}}
                  </v-btn>
                </v-col>
              </v-row>
              <v-container v-else>
                <v-row>
                  <v-col class="d-flex align-center justify-start">
                    {{$t('pages.dashboard.businessExpire')}}
                  </v-col>
                  <v-col class="d-flex align-center justify-end">
                    <v-btn color="success" :title="$t('pages.dashboard.chargeBusiness')" to="/user/new-order" prepend-icon="mdi-cart-plus">{{$t('pages.dashboard.chargeBusiness')}}</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>