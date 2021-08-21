<template>
  <div>
    <div class="control">
        <router-link :to="{ name: 'Create-Users' }" class="button is-info mt-5">
        Add New
        </router-link>
    </div>

    <div class="control">
        <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th class="has-text-centered">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.password }}</td>
            <td class="has-text-centered">
                <router-link
                :to="{ name: 'Edit-Users', params: { id: item.id } }"
                class="button is-info is-small"
                >Edit</router-link
                >
                <a
                class="button is-danger is-small"
                @click="deleteUsers(item.id)"
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
  name: "UsersList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getUsers();
  },
 
  methods: {
    // Get All Products
    async getUsers() {
      try {
        const response = await axios.get("http://localhost:5000/users");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteUsers(id) {
      try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        this.getUsers();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>