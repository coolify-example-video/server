import express from "express";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
