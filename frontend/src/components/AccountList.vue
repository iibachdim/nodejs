<template>
  <div class="container">
    <div class="control">
      <router-link :to="{ name: 'Create-Account' }" class="button is-info mt-5">
        Add New Account
      </router-link>
    </div>
    <div class="control">
      <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th class="has-text-centered">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td class="has-text-centered">
              <a
                class="button is-danger is-small"
                @click="deleteAccounts(item.id)"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>

      <router-link :to="{ name: 'Home' }" class="button is-danger">
          BACK
      </router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AccountList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getAccounts();
  },
 
  methods: {
    // Get All Account
    async getAccounts() {
      try {
        const response = await axios.get("http://localhost:5000/accounts");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Account
    async deleteAccounts(id) {
      try {
        await axios.delete(`http://localhost:5000/accounts/${id}`);
        this.getAccounts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>