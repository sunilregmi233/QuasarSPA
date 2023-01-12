// /store/user.js

import { defineStore } from "pinia";
import { api} from 'boot/axios'
import {  SessionStorage } from 'quasar'


export const useUserStore = defineStore("user", {
  state: () => ({
    user: JSON.parse(SessionStorage.getItem('user')),
    is_login: false,
  }),
  getters: {
    getUser: (state) => state.user,
    isAuth: (state) => state.is_login

  },


  actions: {
    async signIn(username, password) {
      let payload = {username: username, password: password}
      try {
        const res = await api.post('/dj-rest-auth/login/', payload);
        const user = res.data.user_type.username;
        const token = res.data.key;
        this.user = user;
        this.is_login = true;
        SessionStorage.set('user', JSON.stringify(user));      
      }
      catch(error) {
        alert("Invalid Login")
        this.$router.push('/')
      }
      
    },
    async signOut() {
      try {
        const res = await api.post('/dj-rest-auth/logout/')
        // console.log(res);
        this.is_login = false
        SessionStorage.set('user', JSON.stringify(null));

      }
      catch(error){
        
        console.error(error);
      }
    }
  },
});