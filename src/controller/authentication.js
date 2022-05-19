import User from "../model/usersModel"
import { hash as hashPassword, compare as comparePassword, generate as generateToken } from "../utils/authUtils"

// Signup and Save a new User
const signup = (req, res) => {
  const {
    id,
    email,
    first_name,
    last_name,
    password,
    phone,
    address,
    is_admin,
  } = req.body;
  const encryptedPassword = hashPassword(password.trim());

  const user = new User(
    id,
    email.trim(),
    first_name.trim(),
    last_name.trim(),
    encryptedPassword,
    phone,
    address.trim(),
    is_admin,
    encryptedPassword
  );

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        status: "error",
        message: err.message || "Some error occurred while creating the User.",
      });
    else {
      const token = generateToken(data.id);
      res.status(201).send({
        status: "success",
        data: {
          token,
          data,
        },
      });
    }
  });
};

// signin a user
const signin = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email.trim(), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          status: "error",
          message: `A user with this email ${email} does not exist`,
        });
        return;
      }
      res.status(500).send({
        status: "error",
        message: err.message || "Some error occurred while retrieving users.",
      });
      return;
    }
    if (data) {
      if (comparePassword(password.trim(), data.password)) {
        const token = generateToken(data.id);
        res.status(200).send({
          status: "success",
          data: {
            token,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
          },
        });
        return;
      }
      res.status(401).send({
        status: "error",
        message: "Incorrect password",
      });
    }
  });
};

const updatePassword = ({ body: { id, oldPassword, newPassword } }, res) => {
  User.findById(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          status: "error",
          message: `A user with this id ${id} does not exist`,
        });
        return;
      }
      res.status(500).send({
        status: "error",
        message: err.message || "Some error occurred while finding user.",
      });
      return;
    }
    if (data && comparePassword(oldPassword.trim(), data.password)) {
      const newEncryptedPassword = hashPassword(newPassword.trim());
      User.updatePassword({ id, newEncryptedPassword }, (err, data) => {
        if (err)
          res.status(500).send({
            status: "error",
            message:
              err.message || "Some error occurred while updating password.",
          });
        if (data.affectedRows)
          res.status(200).send({
            status: "success",
            message: "Successfully changed password",
          });
        else
          res.status(201).send({
            status: "success",
            message: "No data changed",
          });
      });
      return;
    }
    res.status(401).send({
      status: "error",
      message: "Incorrect password",
    });
  });
}
export default {signup, signin, updatePassword}