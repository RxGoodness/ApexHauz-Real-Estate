import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authRoute from "./authenticationRoute";
import propRoute from "./propertyRoute";
import reportsRoute from "./reportRoute";
import connectDB from "../config/connect";
import mysql from "mysql"

config();
const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth', authRoute, propRoute, reportsRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome, ApexHAuz Rest Api " });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message
  })
  next()
})
export default app;

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}.`);
// });


// connectDB.connect(function (err) {
//   if (err) throw err;
//   console.log(`MySQL Database has been connected to the server successfully.`);
// });





// connectDB.connect(function(err) {
//     if (err) {
//        console.log(err)
//       //console.error('Error while connecting to MySQL');
//         // return;
//     }
//     console.log(`Server has been connected to MySQL database successfully.`);
// });

 // connectDB();
//   connectDB.query(`select * from`, (err, res)=>{
//     return console.log(res)
// })


  // afterAll(async () => {
  //   await connection.dropDatabase();
  // });



  //module.exports = connection;
  
