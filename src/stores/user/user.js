// /store/user.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    // async fetchUser() {
    //   const res = await fetch("http://127.0.0.1:8000/dj-rest-auth/user");

    //   const user = await res.json();
    //   this.user = user;
    // },
    // async signUp(email, password) {
    //   const res = await fetch("https://localhost:3000/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const user = await res.json()
    //   this.user = user;
    // },
    async signIn(email, password) {
      const res = await fetch("http://127.0.0.1:8000/api/v1/dj-rest-auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
  },
});