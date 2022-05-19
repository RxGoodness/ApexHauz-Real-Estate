import jwt from "jsonwebtoken";

function token(data) {
  return jwt.sign(JSON.parse(JSON.stringify(data)), `${process.env.JWT_SECRET}`);
}
export default token;