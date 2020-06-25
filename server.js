const express = require("express");
const app = express();
const dbConnect = require("./config/db");
const path = require("path");
dbConnect();
const PORT = process.env.PORT || "5000";
app.listen(PORT, () => console.log(`server connected at port no ${PORT}`));

//init middleware
app.use(express.json({ extended: false }));
//api
app.use("/api/user", require("./routes/api/user"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
