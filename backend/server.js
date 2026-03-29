import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/news", async (req, res) => {
  try {
    const category = req.query.category || "general";

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1cbf1709b4f8418ead26050a190e7a2d`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.json({ articles: [] });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});