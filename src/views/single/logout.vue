<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  name:'logout',
  mounted() {
    axios.get('/api/user/logout').then(()=>{
      localStorage.removeItem('X-AUTH-TOKEN');
      localStorage.removeItem('isLogedIn');
      window.location.href='/';
    });
  },
})
</script>

<template>
    <div id="main" class="container">
        <div class="fof">
            <h1>{{ $t('static.logout_loading') }}</h1>
        </div>
    </div>
</template>

<style scoped>
*{
    transition: all 0.6s;
}

html {
    height: 100%;
}

body{
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
}

#main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof{
	  display: table-cell;
	  vertical-align: middle;
}

.fof h1{
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}
</style>