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
      <button class="button is-success" @click="updateUsers">UPDATE</button>
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
  name: "EditUsers",
  data() {
    return {
      Name: "",
      Email: "",
      Password: "",
    };
  },
  created: function () {
    this.getUsersById();
  },
  methods: {
    // Get Product By Id
    async getUsersById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${this.$route.params.id}`
        );
        this.Name = response.data.name;
        this.Email = response.data.email;
        this.Password = response.data.password;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateUsers() {
      try {
        await axios.put(
          `http://localhost:5000/users/${this.$route.params.id}`,
          {
            name: this.Name,
            email: this.Email,
            password: this.Password,
          }
        );
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