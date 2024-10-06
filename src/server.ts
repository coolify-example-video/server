import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const server = express();

server.use(express.json());
server.use(cors());

server.get("/course", async (req, res) => {
  res.json(await prisma.course.findMany());
});

server.post("/course", async (req, res) => {
  const body = req.body;

  const course = await prisma.course.create({
    data: {
      name: body.name,
    },
  });

  res.json({
    course,
  });
});

server.delete("/course/:id", async (req, res) => {
  await prisma.course.delete({
    where: {
      id: Number(req.params.id),
    },
  });

  res.status(204).end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
