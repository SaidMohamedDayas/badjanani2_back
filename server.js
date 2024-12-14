const express = require("express");
const connectDB = require("./db");
const membersRoutes = require("./routes/members");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(require("cors")());

app.use("/api/members", membersRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
