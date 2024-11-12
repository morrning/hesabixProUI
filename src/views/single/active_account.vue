<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from "axios";
import { useUserStore } from "@/stores/userStore";
import VueSweetalert2 from 'vue-sweetalert2';
export default defineComponent({
  name: "active_account",
  data() {
    const self = this;
    return {
      dialog: ref(false),
      loading: ref(false),
      subloading: ref(false),
      counting: ref(false),
      code: '',
      user: {
        mobile: '',
        email: '',
      },
      rules: {
        mobile: [
          (value: any) => self.validate(value, 'mobile'),
        ],
      }
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    validate(input: string) {
      var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
      if (regex.test(input)) return true
      return this.$t('validator.mobile_not_valid')
    },
    onCountdownEnd() {
      this.counting = false;

    },
    async changeNumber() {

      const { valid } = await this.$refs.formChangeNumber.validate()
      if (valid) {
        this.subloading = true;
        axios.post('/api/user/register/change-number', { 'key': this.$route.params.id, 'mobile': this.user.mobile })
          .then((response: any) => {
            this.subloading = false;
            this.dialog = false;
            this.counting = true;
            this.$swal({
              text: this.$t('user.number_edited'),
              confirmButtonText: this.$t('dialog.ok'),
              icon: 'success'
            });
          })
      }
    },
    onResendCodeClick() {
      axios.post('/api/user/register/resend-active-code', { 'key': this.$route.params.id }).then((response: any) => {
        this.counting = true;
        this.$swal({
          text: this.$t('user.resendCode'),
          confirmButtonText: this.$t('dialog.ok'),
          icon: 'success'
        });
      });

    },
    loadData() {
      axios.post("/api/user/register/get-info-by-key", { 'key': this.$route.params.id }).then((response: any) => {
        this.user = response.data.data;
      })
    },
    async submit() {
      const { valid } = await this.$refs.form.validate()
      if (valid)
        this.loading = true;
      axios.post('/api/user/register/active-account', {
        key: this.$route.params.id,
        mobile: this.user.mobile,
        code: this.code
      }).then((response: any) => {
        if (response.data.error != 200) {
          this.$swal({
            text: response.data.message,
            confirmButtonText: this.$t('dialog.ok'),
            icon: 'warning'
          });
          if (response.data.code == '101') this.user.email = '';
          else if (response.data.code == '102') this.user.mobile = '';
        }
        else {
          localStorage.setItem('X-AUTH-TOKEN', response.data.data.token)
          this.$router.push('/')
        }
        this.loading = false;
      });
    }
  }
})
</script>


<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col md="5">
        <v-card :loading="loading ? 'blue' : ''" :title="$t('app.name')" :subtitle="$t('user.active_account')">
          <v-card-text>
            <v-form ref="form" :disabled="loading" fast-fail @submit.prevent="submit()">
              <v-otp-input focus-all v-model="code" style="direction: ltr"></v-otp-input>
              <v-row>
                <v-col class="my-2 mx-4">
                  <v-icon icon="mdi-phone" />
                  {{ $t('user.your_phone_number', { 'mobile': user.mobile }) }}
                  <v-btn class="float-end" color="indigo" :disabled="counting" @click="onResendCodeClick()">
                    <vue-countdown v-if="counting" :time="120000" v-slot="{ minutes, seconds }" @end="onCountdownEnd">
                      {{ $t('user.resendCodeLabel') }}
                      {{ minutes + ':' + seconds }}
                    </vue-countdown>
                    <span v-else>{{ $t('user.send_again') }}</span>
                  </v-btn>
                </v-col>
              </v-row>

              <v-btn :loading="loading" block class="text-none mb-4" color="indigo-darken-3" size="x-large"
                variant="flat" prepend-icon="mdi-send" type="submit">
                {{ $t('dialog.active_account') }}
              </v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-dialog v-model="dialog" width="500" persistent>
              <template v-slot:activator="{ props }">
                <v-btn variant="tonal" v-bind="props" :text="$t('user.editNumber')" prepend-icon="mdi-account-edit">
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card :loading="subloading ? 'danger' : null" :title="$t('user.editNumber')"
                  prepend-icon="mdi-account-edit">
                  <v-form ref="formChangeNumber" :disabled="loading" fast-fail @submit.prevent="changeNumber()">
                    <v-card-text>
                      <v-text-field class="mb-2" :label="$t('user.mobile')" :placeholder="$t('user.mobile_placeholder')"
                        single-line v-model="user.mobile" type="phone" variant="outlined" prepend-icon="mdi-phone"
                        :rules="rules.mobile"></v-text-field>
                    </v-card-text>
                    <v-card-actions class="px-6">
                      <v-btn type="submit" :loading="subloading" variant="tonal" color="primary"
                        :text="$t('user.editNumber')" prepend-icon="mdi-account-edit"> </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn :disabled="subloading" @click="isActive.value = false" variant="tonal" color="secondary"
                        :text="$t('dialog.cancel')" prepend-icon="mdi-close"></v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </template>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>