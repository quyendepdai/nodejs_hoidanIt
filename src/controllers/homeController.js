const connection = require("../config/database");

const {
  getAllUsers,
  getUserById,
  updateUserModel,
  deleteUserById,
} = require("../services/CRUDService"); //model

const getHomePage = async (req, res) => {
  // call model process data
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const postCreateUser = async (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;

  //code old use callback function
  // connection.query(
  //   `INSERT INTO Users (email,name,city)
  //    VALUES( ?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Create user successfully");
  //   }
  // );

  // syntax ES6 destructuring
  let { email, name, city } = req.body;

  // new code use promise
  let [results, field] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES( ?, ?, ?)`,
    [email, name, city]
  );
  res.send("Create a new user successfully !");
};

// get info user need to update
const getUpdateUser = async (req, res) => {
  const { userId } = req.params;

  let infoUser = await getUserById(userId);

  res.render("edit.ejs", { user: infoUser });
};
//update a user
const updateUser = async (req, res) => {
  let { id, email, name, city } = req.body;
  await updateUserModel(email, name, city, id);
  res.redirect("/");
};

//delete user
const postDeleteUser = async (req, res) => {
  let userId = req.params.userId;
  await deleteUserById(userId);
  res.redirect("/");
};

// create a new user
const getCreateUser = (req, res) => {
  res.render("create.ejs");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
  updateUser,
  postDeleteUser,
};
