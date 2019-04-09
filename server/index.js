const express = require("express");
const app = express();
const { getArticles, deleteArticle } = require("./controllers/articlesCtlr");

app.use(express.json());

app.get("/api/articles", getArticles);
app.delete("/api/articles/:id", deleteArticle);

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
