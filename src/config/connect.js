import express from 'express';
import mysql from 'mysql';
//const connection = mysql.createConnection({

   const connectDB = mysql.createConnection({


    // let connection = mysql.createConnection({
        // host: process.env.DB_HOST,
        // user: process.env.DB_USER,
        // password: process.env.DB_PASS,
        // database: process.env.DB_NAME
    //   });
        // const connection = mysql({   
       //     "Host": '127.0.0.1',
       // "Port": '3306',
       // "User": 'root' ,
    //    provide: 'SEQUELIZE',
    // useFactory: async () => {
    //   const sequelize = new Sequelize({
    //     dialect: 'mysql',



   host:process.env.DB_HOST,
   user:process.env.DB_USER,
   password:process.env.DB_PASS,
   database:process.env.DB_NAME
        //    host: 'localhost',
        //    user:'root',
        //    password:"@Ata287693",
        //    database: "Apexhauz",
        //   connectionLimit: 10,
        //   port:3306,
        //   database: 'Apexhauz'








          
         


        });
       

        connectDB.connect(function (err) {
            if (err) throw err;
            console.log(`MySQL Database has been connected to the server successfully.`);
          });
          

export default connectDB;     

