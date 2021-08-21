// import connection
import db from "../config/database.js";

// Get All Account
export const getAccounts = (result) => {
    db.query("SELECT * FROM accounts", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Account
export const getAccountsById = (id, result) => {
    db.query("SELECT * FROM accounts WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Account to Database
export const insertAccounts = (data, result) => {
    db.query("INSERT INTO accounts SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Delete Account
export const deleteAccountsById = (id, result) => {
    db.query("DELETE FROM accounts WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}