const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const port = 4242;
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({
    Message: "HELLOW BITCHEEEEEEEEEEES",
  });
});

app.use("/cursed-words", require("./routes/cursedwords"));

app.listen(port, () => {
  sequelize.sync();
  sequelize.authenticate();
  console.log(`server is running at ${port}`);
});
