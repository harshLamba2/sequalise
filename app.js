const express = require("express");
const app = express();
const router = express.Router();

const PORT = 5000;

const database = require("./config/database.js");

const {
  syncDatabase,
  connectDatabse,
  models,
} = require("./config/connectSyncDatabase.js");

connectDatabse();
// syncDatabase();

app.use((req, res, next) => {
  req.db = database;
  next();
});

app.use(express.json());

router.post("/api/insertUser", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    await models.User.create({ username, email, password });
    res
      .status(200)
      .json({ success: true, message: "Data Inserted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Something Went Wrong (" + error + ")",
    });
  }
});

router.get("/api/getAllUsers", async (req, res) => {
  try {
    // let allUsers = await req.db.models.User.findAll();
    // console.log(allUsers);

    let [allUsers] = await req.db.query("SELECT * FROM users");
    res
      .status(200)
      .json({
        success: true,
        message: "User data fetched successfully",
        data: { allUsers },
      });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Something went Wrong (" + error + ")",
    });
  }
});

app.use(router);

app.listen(PORT, () => console.log("listening on PORT " + PORT));
