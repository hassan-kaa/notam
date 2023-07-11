const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router");
//const pool = require("./database");
app.listen(5002, () => {
  console.log("app running on port 5002");
});
app.use(express.json());
// pool.connect((err) => {
//   if (err) console.log(err);
//   else console.log("connected successfully!");
// });
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use("/notams", router);
