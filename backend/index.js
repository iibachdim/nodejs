// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";
 
// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
app.use(Router);

//login
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUnitialized: true
// }));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));