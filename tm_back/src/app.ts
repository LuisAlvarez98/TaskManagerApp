import express from "express";

const app = express();
const port = 8080;
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error", err));

const exampleSchema = new mongoose.Schema({
  name: String,
});
const Example = mongoose.model("Example", exampleSchema);
async function createExample() {
  const ex = new Example({
    name: "Luis",
  });
  try {
    const result = await ex.save();
    console.log(result);
  } catch (ex) {
    console.log(ex);
  }
}
app.get("/", (req, res) => {
  res.send("Hello world");
  createExample();
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server listening on ${port}`);
});
