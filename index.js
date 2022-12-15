const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { ListModel } = require("./models/list.model");
const { BMModel } = require("./models/bookmark.model");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());



app.post("/list/create", async (req, res) => {
  const {title,quantity,priority,date,timestamp,desc} = req.body
  const list = new ListModel({title,quantity,priority,date,timestamp,desc}).save()
  res.send("Product Added")
  console.log(list)
});
app.post("/bookmarks", async (req, res) => {
  const {title,quantity,priority,date,timestamp,desc} = req.body
  const list = new BMModel({title,quantity,priority,date,timestamp,desc}).save()
  res.send("Product Added")
  console.log(list)
});
app.get("/list/getlist", async (req, res) => {
 const list  = await ListModel.find()
 console.log(list)
 res.send(list)
});
app.get("/bookmarks", async (req, res) => {
  const list  = await BMModel.find()
  // console.log(list)
  res.send(list)
 });
app.delete("/list/delete/:name",async(req,res)=>{
  const title = req.params.name.toString()
  console.log(title)
  await ListModel.deleteOne({title:title})
  res.send("Item deleted")
})

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connnecting to DB");
    console.log(err);
  }
  console.log(`listening on PORT ${PORT}`);
});
