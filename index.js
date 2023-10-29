const express = require("express");
const cors = require("cors");
const todoRoutes = require("./src/todoRoutes");
const notesRoutes = require("./src/notesRoutes")

const server = express();
console.log("Before JSON middleware"); // Add this line
server.use(express.json()); // This line is your JSON middleware
console.log("After JSON middleware"); 
server.use(cors());
server.use("/api/todos", todoRoutes);
server.use("/api/notes", notesRoutes)


// Other routes and server configuration
// Middleware to parse JSON data from the request body

const PORT = process.env.PORT || 4100;
server.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
