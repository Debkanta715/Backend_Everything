const modelschema = require("../model/models");
const jwt = require("jsonwebtoken"); // for the token genarate
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  // take the data or call the data from the body
  const { username, email, password, role = "user" } = req.body;

  // check uniqueness
  const isuseralredyexits = await modelschema.findOne({
    $or: [
      {
        username,
      },
      {
        email,
      },
    ],
  });

  if (isuseralredyexits) {
    return res.status(409).json({
      Message: "user alredy exits",
    });
  }

  // hash the password here

  const hash = await bcrypt.hash(password, 10); // make the password in hash 10 is salting a random value

  // create a user
  const user = await modelschema.create({
    username,
    email,
    password: hash,
    role,
  });

  // token genarate ny jwt

  const token = jwt.sign(
    {
      id: user._id, // for the use token
      role: user.role,
    },
    process.env.JWT_URI, // for jwt secrect key simply search  (https://jwtsecrets.com/#generator)
  );

  res.cookie("token", token); // here "token" is the name that is show in the webbackend
  // token is the befire variabke name

  // for give the massage in the postman
  res.status(201).json({
    Message: "user registerd successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}

// now for the login user

async function loginuser(req, res) {
  // user can login by username and password or email and password
  const { username, email, password } = req.body;

  // check the email  if it get only one like username then thet email is undefined and if email then the username is undefind
  const user = await modelschema.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid value",
    });
  }

  // now check the password

  const ispasswordvalid = await bcrypt.compare(password, user.password); // here bcrypt convert the plain text into the hash the hit compare if match with the database then it return correct

  if (!ispasswordvalid) {
    return res.status(401).json({
      message: "password is not valid",
    });
  }

  // if password match then crate a token

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_URI,
  );

  // hide the token in cokkie
  res.cookie("token", token);

  // print it in post man

  res.status(200).json({
    message: "user logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}




module.exports = { registerUser, loginuser };

// hasing means the number is genarated in many mix of order like letter , word , number
// test-----------------------hasing--------------->09uruhjhfjh876574840839004ubhbrjn  (like this)

//for genarator hash go to the google and search MD5 Hash Generaor

// by hash we can not convert it into plane text means plaintext to ------------->hash
// but  hash -------------->plaintex not possible (error)

// same plaintex is == same hash if we give it multiple times
