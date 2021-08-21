// import express
import express from "express";
 
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
import { createAccounts, showAccounts, showAccountsById, deleteAccounts } from "../controllers/account.js";
import { showUsers, showUsersById, createUsers, updateUsers, deleteUsers } from "../controllers/users.js";

// init express router
const router = express.Router();

// Route Product
    router.get('/products', showProducts);
    router.get('/products/:id', showProductById);
    router.post('/products', createProduct);
    router.put('/products/:id', updateProduct);
    router.delete('/products/:id', deleteProduct);

// Route Account
    router.get('/accounts', showAccounts);
    router.get('/accounts/:id', showAccountsById);
    router.post('/accounts', createAccounts);
    router.delete('/accounts/:id', deleteAccounts);

// Route Users
    router.get('/users', showUsers);
    router.get('/users/:id', showUsersById);
    router.post('/users', createUsers);
    router.put('/users/:id', updateUsers);
    router.delete('/users/:id', deleteUsers);

// export default router
export default router;