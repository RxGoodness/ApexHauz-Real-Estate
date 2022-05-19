import express from "express";
import bcrypt from "bcryptjs";
import token from "../config/token";
import asyncHandler from "express-async-handler";
import { UserSchema } from "../utils/userValidation";
import connectDB from "../config/connect";
import { createConnection } from "mysql";

  
const userSignUp = asyncHandler(async (req, res) => {
    const data = req.body;
    UserSchema.parse(data)
    const{email, password} =data;


    // function queryRow(userName) {
    //     let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    //     let query = mysql.format(selectQuery,["todo","user", userName]);
    //     // query = SELECT * FROM `todo` where `user` = 'shahid'
    //     pool.query(query,(err, data) => {
    //         if(err) {
    //             console.error(err);
    //             return;
    //         }
    //         // rows fetch
    //         console.log(data);
    //     });
    // }
    
    // timeout just to avoid firing query before connection happens
    
    // setTimeout(() => {
    //     // call the function
    //     // select rows
    //     queryRow('shahid');
    // },5000);
    
// first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
connectDB.connect((err)=> {
    if (err) throw err;
else{
const existing = connectDB.query(connectDB, "SELECT * FROM users WHERE id = 9", (err, result, rows)=>{
    if (err) throw err;
    else{


        const salt =  bcrypt.genSalt(10);
        const hashedPass = bcrypt.hash(password, salt);
      console.log(password)
      console.log(hashedPass)
       
      //Write the data with hashed password to database
        const securedData = { ...data, password: hashedPass };
        console.log(securedData)
      
      

        // con.connect(function(err) {
        //     if (err) throw err;
        //     con.query("SELECT name, address FROM customers", function (err, result, fields) {
        //       if (err) throw err;
        //       console.log(result);
        //     });
        //   });

          connectDB.connect(function(err) {
            if (err) throw err;
        else{
        //const user = await User.create(securedData);
          let sql = "INSERT INTO users SET ?";
          let user = connectDB.query(sql, securedData, (err, result, rows) => {
            if (err) throw err;
            console.log('myComputer', user)
          //  console.log(result);
         //   res.send("Post one added...");
         const  generatedToken = token(email)
         console.log(securedData, generatedToken)
          res.status(201).json({securedData, generatedToken });
        //  res.end();
// connectDB.destroy()

          })
        }
connectDB.destroy()

// connection.destroy()

      })
// connection.destroy();

    }
connectDB.destroy()

})
    // console.log(existing)
    // if (!err) {
    //     console.log(rows)
    //   return  rows
    // }
    // else{
    //     console.log(err)
    // }
}
connectDB.destroy()

})
// connection.destroy()
// if(existing==true){
//             res.send("User already exists")
//         }
// else{
        //    const salt = await bcrypt.genSalt(10);
        //    const hashedPass = await bcrypt.hash(password, salt);
        //  console.log(password)
        //  console.log(hashedPass)
          
        //  //Write the data with hashed password to database
        //    const securedData = { ...data, password: hashedPass };
        //    console.log(securedData)
         
         
        //    //const user = await User.create(securedData);
        //      let sql = "INSERT INTO users SET ?";
        //      let user = connectDB.query(sql, securedData, (err, result) => {
        //        if (err) throw err;
        //        console.log('myComputer', user)
        //      //  console.log(result);
        //     //   res.send("Post one added...");
        //     const  generatedToken = token(email)
        //     console.log(securedData, generatedToken)
        //      res.status(201).json({securedData, generatedToken });
        //    //  res.end();
        //      })
          
        //  }
        })
        //    }
        //    console.log('The data from user table: \n', rows);
 //})
//})
export default userSignUp;


