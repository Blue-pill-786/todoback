const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config/mongodb');
const cors = require("cors");
const corsOptions = require('./config/corsOptions');
const notesRouter = require('./routes/notesRoutes'); // Import the notes router
const todosRouter = require('./routes/todoRoutes'); // Import the todos router
require('dotenv').config();

const port = process.env.PORT; // Corrected to use PORT

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to database");
  // Start the server after successful database connection
  server.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
})
.catch((error) => {
  console.error("Error connecting to database:", error);
  // You might want to handle the error here, such as sending a response to clients
});

server.use(cors(corsOptions)); // Use the cors middleware with your specified options.
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use("/api/todos", todosRouter); // Use the todos router
server.use("/api/notes", notesRouter); // Use the notes router

server.get("/", (req, res) => {
  res.send("Welcome to Utility API");
});
