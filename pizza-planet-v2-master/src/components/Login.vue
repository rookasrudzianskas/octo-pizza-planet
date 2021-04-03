<template>
  <div class="login_wrapper">
    <p>Please login to continue:</p>

    <form>
      <div>
        <label>Email address</label>
        <input type="email" id="email" placeholder="Enter email" v-model="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" placeholder="Password" v-model="password" />
      </div>
      <button type="button" class="btn_green" @click.prevent="signIn">Sign in</button>
    </form>
  </div>
</template>

<script>
import { store } from "../store/store.js";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      const user = {
        email: this.email,
        password: this.password
      };
      store.dispatch("signIn", user);
    }
  }
};
</script>

<style scoped>
</style>