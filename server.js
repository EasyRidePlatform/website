const express = require("express");
const ejs = require("ejs");

const app = express();
const path = require("path");


// DB connection
require("./src/db/conn");
const messages = require("./src/models/messages");

const port = process.env.PORT || 3001;

//Public Static Path

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));

const partials_path = path.join(__dirname, "../views/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// //Routing
app.get("/", (req, res) => {
  res.render("index");
});

//index
app.get("/index", (req, res) => {
  res.render("index");
});


//contact post
app.post("/contact", async (req, res) => {
  try {
    const usermessages = new messages({
      username: req.body.username,
      email: req.body.email,
      number: req.body.number,
      message: req.body.message,
    });
    const contacted = await usermessages.save();
    res.send(`
      <script>
        alert("Thank you for contacting us!"); window.location.href = "/index";
      </script>`);
  } catch (error) {
  res.send(`
      <script>
        alert("Something Wrong!"); window.location.href = "/index";
      </script>`);
  }
});

//error404
app.get("*", (req, res) => {
  res.render("error404");
});

//Listening to the port
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
