const express = require("express");
const mongoose = require("mongoose");
const custRoutes = require("./routes/custRoutes");

const app = express();
app.use(express.urlencoded({ extended: true }));

const URI =
  "mongodb+srv://shreyas710:1234@cluster0.mup9l.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/custs", custRoutes);

app.get("/mart", (req, res) => {
  res.sendFile("./views/enter.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
