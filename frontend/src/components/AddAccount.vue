<template>
  <div>
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Username"
          v-model="accountUsername"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input
          class="input"
          type="password"
          placeholder="Password"
          v-model="accountPassword"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="Email"
          v-model="accountEmail"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveAccount">SAVE</button>
      <router-link
            :to="{ name: 'Index-Account' }"
            class="button is-danger"
            >BACK</router-link
        >
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddAccount",
  data() {
    return {
      accountUsername: "",
      accountPassword: "",
      accountEmail: "",
    };
  },
  methods: {
    // Create New accounts
    async saveAccount() {
      try {
        await axios.post("http://localhost:5000/accounts", {
          username: this.accountUsername,
          password: this.accountPassword,
          email: this.accountEmail
        });
        this.accountUsername = "";
        this.accountPassword = "";
        this.accountEmail = "";
        this.$router.push("/index-account");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>