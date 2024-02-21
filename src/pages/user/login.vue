<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col md="5">
                <v-card :loading="loading" :title="$t('app.name')" :subtitle="$t('user.login_label')">
                    <v-card-text class="text-justify">
                        {{ $t('login.des') }}
                    </v-card-text>

                    <v-card-text>
                    <v-text-field
                        :label="$t('user.email')"
                        :placeholder="$t('user.email_placeholder')"
                        single-line
                        type="email"
                        variant="outlined"
                        :disabled="loading"
                    ></v-text-field>

                    <v-text-field
                        :label="$t('user.password')"
                        :placeholder="$t('user.password_placeholder')"
                        single-line
                        type="password"
                        variant="outlined"
                        :disabled="loading"
                    ></v-text-field>
                    <v-btn
                        :disabled="loading"
                        :loading="loading"
                        block
                        class="text-none mb-4"
                        color="indigo-darken-3"
                        size="x-large"
                        variant="flat"
                        prepend-icon="mdi-login"
                        @click="loading = !loading"
                    >
                        {{ $t('user.login') }}
                    </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script lang="ts">
   export default {
    data: () => ({
      loading: false,
    }),
    mounted(){
        
    },
    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>