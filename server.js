const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGOD_URL || 'mongodb://localhost/lights',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// module.exports = {
//   mode: "modules",
//   target: "es6",
//   out: "docs",
//   exclude: ["**/node_modules/**", "**/*.spec.ts", "**/*.test.ts", "dist"],
//   name: "Google Maps Services Node Client",
//   ignoreCompilerErrors: false,
//   module: "commonjs",
 
// };
