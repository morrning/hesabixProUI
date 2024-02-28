<script lang="ts">
import {useUserStore} from "@/stores/userStore";
import {defineComponent, ref} from 'vue'
import {mapActions, mapState, mapStores} from "pinia";
import applicationStore from "../stores/application";
import Change_lang from "@/components/application/buttons/change_lang.vue";

  export default defineComponent({
    name:'profile',
    components: {Change_lang},
    data(vm) {
      const self:any = this;
      return {
        drawer: ref(null),
        menu:false,
        items: [
          { text: self.$t('user.businesses'),url:'/user/dashboard', icon: 'mdi-format-list-text', visible:true },
          { text: self.$t('user.new_business'),url:'/user/new-business', icon: 'mdi-shape-square-plus', visible:true },
          { text: self.$t('user.tickets'),url:'/user/tickets', icon: 'mdi-ticket-confirmation', visible:true },
          { text: self.$t('user.invoices'),url:'/user/invoices', icon: 'mdi-invoice-multiple', visible:true },
          { text: self.$t('user.notifications'),url:'/user/notifications', icon: 'mdi-email-newsletter', visible:true },
          { text: self.$t('user.change_password'),url:'/user/change-password', icon: 'mdi-lock-reset', visible:true },
          { text: self.$t('user.manager'),url:'/admin/dashboard', icon: 'mdi-shield-crown', visible:false },
        ],
      }
    },
    computed:{
      applicationStore() {
        return applicationStore
      },
      ...mapStores(useUserStore),
      // gives read access to this.userData and this.synced
      ...mapState(useUserStore, ['userData', 'synced']),
    },
    methods:{
      ...mapActions(useUserStore, ['refresh']),
    },
  });
</script>

<template>
  <v-app id="inspire">
    <v-system-bar color="primaryLight2">
      <v-avatar image="/img/logo-blue.png" size="20" class="me-2" />
      <span>{{$t('hesabix.banner')}}</span>
      <v-spacer/>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" color="primaryLight">
      <v-card height="64" color="primary" rounded="0" prepend-icon="mdi-account">
        <template v-slot:title>
          {{$t('app.name')}}
        </template>
        <template v-slot:prepend>
          <v-avatar image="/img/favw.png" />
        </template>
      </v-card>
      <v-list class="px-0 pt-0">
        <v-list-item
            v-for="(item, i) in items"
            v-show="item.visible"
            :to="item.url"
            :key="i"
            :value="item"
            color="primary"
          
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ $t(applicationStore.state.title)}}</v-app-bar-title>
      <v-spacer></v-spacer>
      <change_lang/>
      <v-btn icon="mdi-logout-variant" to="/single/logout" class="me-2" />
      <v-btn :icon="true" to="/user/notifications" class="me-2">
        <v-badge color="error" dot>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>


