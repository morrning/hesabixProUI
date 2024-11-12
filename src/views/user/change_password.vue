<script lang="ts">
import {defineComponent} from 'vue'
import applicationStore from "../../stores/applicationStore";
import axios from "axios";
export default defineComponent({
  name: "change_password",
  computed: {
    applicationStore() {
      return applicationStore
    }
  },
  data(){
    const self = this;
    return{
      formData:{
        password1:'',
        password2:''
      }
  }},
  mounted() {
    this.applicationStore.commit('setTitle','user.change_password');
  },
  methods:{
    async submit() {
      const { valid } = await this.$refs.form.validate()
      if(valid && (this.formData.password1.toString() == this.formData.password2.toString())){
        axios.post('/app/user/change-password',this.formData).then((response:any) => {
          if(response.data.error == '200'){
            //user is not active jump to active page
            this.$swal({
              text: this.$t('pages.reset_password.password_changed'),
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
        });
      }
      else if(this.formData.password1.toString() != this.formData.password2.toString()){
        this.$swal({
          text: this.$t('pages.reset_password.passwords_not_match'),
          confirmButtonText: this.$t('dialog.ok'),
          icon:'error'
        });
      }
      else{
        this.$swal({
          text: this.$t('pages.reset_password.form_not_valid'),
          confirmButtonText: this.$t('dialog.ok'),
          icon:'error'
        });
      }
    }
  }
})
</script>

<template>
  <v-container class="">
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-form ref="form" @submit.prevent >
              <v-text-field
                  class="mb-2"
                  :label="$t('user.password')"
                  :placeholder="$t('user.password_placeholder')"
                  single-line
                  type="password"
                  variant="outlined"
                  prepend-icon="mdi-lock"
                  v-model="formData.password1"
                  :rules="[() => formData.password1.length > 7 || $t('validator.password_len_lower')]"
              ></v-text-field>
              <v-text-field
                  :label="$t('user.password')"
                  :placeholder="$t('user.password_placeholder')"
                  single-line
                  type="password"
                  variant="outlined"
                  prepend-icon="mdi-lock"
                  v-model="formData.password2"
                  :rules="[() => formData.password2.length > 7 || $t('validator.password_len_lower')]"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit()" type="submit" prepend-icon="mdi-content-save-check" variant="flat" color="primary">{{$t('dialog.save')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>