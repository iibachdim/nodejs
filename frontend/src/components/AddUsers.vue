<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name"
          v-model="Name"
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
          v-model="Email"
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
          v-model="Password"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveUsers">SAVE</button>
      <router-link
            :to="{ name: 'Index-Users' }"
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
  name: "AddUsers",
  data() {
    return {
      Name: "",
      Email: "",
      Password: "",
    };
  },
  methods: {
    // Create New Users
    async saveUsers() {
      try {
        await axios.post("http://localhost:5000/users", {
          name: this.Name,
          email: this.Email,
          password: this.Password,
        });
        this.Name = "";
        this.Email = "";
        this.Password = "";
        this.$router.push("/index-users");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>