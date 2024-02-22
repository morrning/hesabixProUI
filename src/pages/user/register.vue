<script lang="ts">
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
  name: "register",
  data() {
    const self = this;
    return {
      loading:false,
      rules:{
        name: [
          value => self.validate(value,'fill'),
        ],
        email: [
          value => self.validate(value,'email'),
        ],
        mobile: [
          value => self.validate(value,'mobile'),
        ],
        password: [
          value => self.validate(value,'password'),
        ],
      }

    }
  },
  mounted() {
      this.loadData();
  },
  methods:{
    validate(input:string,type:string){
      if(type == 'fill'){
        if (input?.length > 0) return true
        return this.$t('validator.required')
      }
      else if(type == 'email'){
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(input)) return true
        return this.$t('validator.email_not_valid')
      }
      else if(type == 'password'){
        if(input == undefined ) {
          return false
        }
        else if (input.length > 8) return true
        return this.$t('validator.password_len_lower')
      }
      else if(type == 'mobile'){
        var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
        if(regex.test(input))  return true
        return this.$t('validator.mobile_not_valid')
      }
    },
    loadData(){
      axios.get("/api").then((response:any)=>{

      })
    }
  }
})
</script>

<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col md="5">
        <v-card :loading="loading" :title="$t('app.name')" :subtitle="$t('user.register_label')">
          <v-card-text>
            <v-form :disabled="loading" fast-fail @submit.prevent >
              <v-text-field
                class="mb-2"
                :label="$t('user.name')"
                :placeholder="$t('user.name_des')"
                single-line
                type="text"
                variant="outlined"
                prepend-icon="mdi-account"
                :rules="rules.name"
              ></v-text-field>

              <v-text-field
                class="mb-2"
                :label="$t('user.email')"
                :placeholder="$t('user.email_placeholder')"
                single-line
                type="email"
                variant="outlined"
                prepend-icon="mdi-email"
                :rules="rules.email"
              ></v-text-field>

              <v-text-field
                class="mb-2"
                :label="$t('user.mobile')"
                :placeholder="$t('user.mobile_placeholder')"
                single-line
                type="phone"
                variant="outlined"
                prepend-icon="mdi-phone"
                :rules="rules.mobile"
              ></v-text-field>

              <v-text-field
                class="mb-2"
                :label="$t('user.password')"
                :placeholder="$t('user.password_register_des')"
                single-line
                type="password"
                variant="outlined"
                prepend-icon="mdi-lock"
                :rules="rules.password"
              ></v-text-field>
              <v-card-text class="text-justify text-info">
                <v-icon icon="mdi-information" />
                {{ $t('user.register_terms_des') }}
              </v-card-text>
              <v-btn
                :loading="loading"
                block
                class="text-none mb-4"
                color="indigo-darken-3"
                size="x-large"
                variant="flat"
                prepend-icon="mdi-account-plus"
                @click="loading = !loading"
              >
                {{ $t('user.register') }}
              </v-btn>
            </v-form>

          </v-card-text>
          <v-card-text>
            <v-btn to="/user/forget-password">
              {{ $t('user.forget_password_des') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
