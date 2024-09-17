import express from "express";
import router from "./routes";
import app from "./app";

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
