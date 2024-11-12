<script lang="ts">
import {useUserStore} from "@/stores/userStore";
import {defineComponent, ref} from 'vue'
import {mapActions, mapState, mapStores} from "pinia";

export default defineComponent({
  name:'app',
  computed:{
    ...mapStores(useUserStore),
    // gives read access to this.count and this.double
    ...mapState(useUserStore, ['userData', 'synced']),
  },
  methods:{
    ...mapActions(useUserStore, ['refresh']),
  },
  data() {
    const self:any = this;
    return {
      drawer: ref(null),
      menu:false,
      userMenuItems:[
        {
          text:self.$t('app.profile'),
          icon:"mdi-account",
          href:"/user/dashboard"
        },
        {
          text:self.$t('app.logout'),
          icon:"mdi-logout",
          href:"/single/logout"
        }
      ]
    }
  },
  created() {
    if(localStorage.getItem('isLogedIn') != 'true'){
      this.$router.push('/single/login')
    }
  },
  mounted() {

  }
});
</script>

<template>
  <v-app id="inspire">
    <v-system-bar color="green-lighten-4">
      <v-avatar image="/img/logo-blue.png" size="20" class="me-2" />
      <span justify="start">{{$t('hesabix.banner')}}</span>
      <v-spacer/>
    </v-system-bar>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title >
        {{$t('app.name')}}
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="me-2">
        <v-badge color="error" dot>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <template v-slot:append>
        <v-menu
            v-model="menu"
            :close-on-content-click="true"
        >
          <template v-slot:activator="{ props }">
            <v-btn variant="text" color="white" v-bind="props" icon="mdi-account" size="45"></v-btn>
          </template>

          <v-card
              class="mx-auto"
              width="250"
          >
            <v-layout>
              <v-navigation-drawer>
                <v-list>
                  <v-list-item
                      prepend-icon="mdi-account"
                      :title="this.userData.email"
                      :subtitle="this.userData.name"
                  >
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>

                <v-list density="compact" nav>
                  <v-list-item
                      v-for="(item, i) in userMenuItems"
                      :key="i"
                      :value="item"
                      color="primary"
                      :to="item.href"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>

              <v-main style="height: 354px;"></v-main>
            </v-layout>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        temporary
    >
      <v-list density="compact" nav>
        <v-list-item
            v-for="(item, i) in userMenuItems"
            :key="i"
            :value="item"
            color="primary"
            :to="item.href"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>