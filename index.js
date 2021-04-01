const express = require("express");
const apiRoutes = require("./api/routes/routes");

const port = process.env.PORT || 3000; //listen to the port set by enviroment or default to 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/genres/", apiRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
