//import User from "../model/users.model.js";
import { LoginSchema } from "../config/zod.schemas.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import token from "../config/token";

const loginUser = asyncHandler(async (req, res) => {
  const data = req.body;
  LoginSchema.parse(data);
  const { email, password } = data;

 // const user = await User.findOne({ email });

  const findInSql = "SELECT * from users WHERE email = email";
  // TODO Here we need to validate the ID coming from request
  let exists = connectDB.query(findInSql, (err, result) => {
    if (err) {
      res.json({ msg: err });
    } 
    else if (exists) {
            //  res.status(400).json("User already exist");
            //  throw new Error("User already exist");
  


  if (exists && (await bcrypt.compare(password, exists.password))) {
    //const { id, fullName: name, email, role } = user;
    res.status(200).json({ id, name, email, role, token: token(email) });
  } 
}
  else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
})
export default loginUser;
