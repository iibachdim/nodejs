import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
import Home from './components/Home.vue'
import CreateProduct from './components/AddProduct.vue'
import EditProduct from './components/EditProduct.vue'
import IndexProduct from './components/ProductList.vue'
import IndexAccount from './components/AccountList.vue'
import CreateAccount from './components/AddAccount.vue'
import IndexUsers from './components/UsersList.vue'
import CreateUsers from './components/AddUsers.vue'
import EditUsers from './components/EditUsers.vue'
 
Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Create-Product',
    path: '/create-product',
    component: CreateProduct
  },
  {
    name: 'Edit-Product',
    path: '/edit-product/:id',
    component: EditProduct
  },
  {
    name: 'Index-Product',
    path: '/index-product',
    component: IndexProduct
  },
  {
    name: 'Index-Account',
    path: '/index-account',
    component: IndexAccount
  },
  {
    name: 'Create-Account',
    path: '/create-account',
    component: CreateAccount
  },
  {
    name: 'Index-Users',
    path: '/index-users',
    component: IndexUsers
  },
  {
    name: 'Create-Users',
    path: '/create-users',
    component: CreateUsers
  },
  {
    name: 'Edit-Users',
    path: '/edit-users/:id',
    component: EditUsers
  }
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')