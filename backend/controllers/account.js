// Import function from Product Model
import { getAccounts, getAccountsById, insertAccounts, deleteAccountsById  } from "../models/accountModel.js";

//Get All Account
export const showAccounts = (req, res) => {
    getAccounts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Account 
export const showAccountsById = (req, res) => {
    getAccountsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Account
export const createAccounts = (req, res) => {
    const data = req.body;
    insertAccounts(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Account
export const deleteAccounts = (req, res) => {
    const id = req.params.id;
    deleteAccountsById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}