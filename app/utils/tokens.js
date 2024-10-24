const jwt = require("jsonwebtoken");

export function verifyToken(token) {
  let resp;
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      resp = false;
    } else {
      resp = true;
    }
  });
  return resp;
}

export function generateToken(data) {
  return jwt.sign(data, process.env.JWT_SECRET);
}
