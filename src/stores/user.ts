import { defineStore } from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            data:{
                login:false,
                name:'',
                mobile:'',
                email:'',
                id:''
            }
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        async refresh(){
            await  axios.get('/app/current-user/info').then((response:any)=>{
                if(response.data.error == '200'){
                    this.data = response.data.data;
                }
            }).catch((result)=>{
                this.data.login = false;
            })
        }
    },
})