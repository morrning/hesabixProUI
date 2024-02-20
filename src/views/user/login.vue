<template>
    <v-container style="background-image: url('/img/photo21.jpg');">
      <v-row  align="center" justify="center">
        <v-col cols="5">
          <v-card
            loading
            title="{{ $t('app.name') }}"
            subtitle="Subtitle"
            text="..."
          >
            <v-card-actions>
              <v-btn>Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
   
</template>
  
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "login",
    mounted(){
      alert();
    }
})
</script>
  