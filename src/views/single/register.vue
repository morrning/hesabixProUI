<script lang="ts">
import {defineComponent} from 'vue'
import axios from "axios";
export default defineComponent({
  name: "register",
  data() {
    const self = this;
    return {
      loading:false,
      user:{
        name:'',
        email:'',
        mobile:'',
        password:''
      },
      rules:{
        name: [
          (value:any) => self.validate(value,'fill'),
        ],
        email: [
          (value:any) => self.validate(value,'email'),
        ],
        mobile: [
          (value:any) => self.validate(value,'mobile'),
        ],
        password: [
          (value:any) => self.validate(value,'password'),
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
        else if (input.length > 7) return true
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
    },
    async submit(){
      const { valid } = await this.$refs.form.validate()
      if(valid){
        this.loading = true;
        axios.post('/api/user/register',this.user)
            .then((response:any) => {
              if(response.data.error != 200){
                this.$swal({
                  text: response.data.message,
                  confirmButtonText: this.$t('dialog.ok'),
                  icon:'warning'
                });
                if(response.data.code == '101') this.user.email = '';
                else if(response.data.code == '102') this.user.mobile = '';
              }
              else{
                this.$router.push('/single/active-account/' + response.data.data)
              }
              this.loading = false;
            });
      }
    }
  }
})
</script>

<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col md="5">
        <v-card :loading="loading ? 'blue' : null" :title="$t('app.name')" :subtitle="$t('user.register_label')">
          <v-card-text>
            <v-form ref="form" :disabled="loading" fast-fail @submit.prevent="submit()"  >
              <v-text-field
                  class="mb-2"
                  :label="$t('user.name')"
                  :placeholder="$t('user.name_des')"
                  single-line
                  v-model="user.name"
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
                  v-model="user.email"
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
                  v-model="user.mobile"
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
                  v-model="user.password"
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
                  type="submit"
              >
                {{ $t('user.register') }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
