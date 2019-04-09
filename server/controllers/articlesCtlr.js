const articles = [
  {
    id: 1,
    title: "This is my first article",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio at repudiandae exercitationem inventore tempore nam culpa quaerat excepturi architecto vitae molestias, ea dolorem dignissimos mollitia alias quia nobis illum! Ullam provident iusto repellat nam dolorem ipsam quibusdam nulla veritatis magnam reiciendis animi ab, aliquam quae repellendus blanditiis! Eligendi repellat ipsam incidunt nam aperiam repellendus."
  },
  {
    id: 2,
    title: "This is my second article",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eligendi iusto aliquam optio commodi. Vel maxime rerum, dolor asperiores veritatis suscipit, culpa sint, optio laboriosam voluptas labore doloremque accusamus quod.Fugiat necessitatibus deserunt optio a. Recusandae dicta veritatis natus obcaecati, dolore magnam exercitationem nisi atque esse repudiandae vero autem, iusto, magni ipsam id ratione architecto quam mollitia ab nobis. Dolorum."
  },
  {
    id: 3,
    title: "This is my third article",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ipsa sequi, ea magnam nobis omnis fugit perferendis dolore aliquid in praesentium neque, iusto adipisci eos, placeat ratione soluta quia laudantium!Sunt dignissimos iure voluptate laudantium repellendus nulla natus incidunt. Temporibus ab quas, consequuntur voluptatem soluta vero eaque distinctio mollitia fugit amet atque necessitatibus quam iste suscipit voluptatum id cum ratione!"
  },
  {
    id: 4,
    title: "This is my fourth article",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ipsa sequi, ea magnam nobis omnis fugit perferendis dolore aliquid in praesentium neque, iusto adipisci eos, placeat ratione soluta quia laudantium!Sunt dignissimos iure voluptate laudantium repellendus nulla natus incidunt. Temporibus ab quas, consequuntur voluptatem soluta vero eaque distinctio mollitia fugit amet atque necessitatibus quam iste suscipit voluptatum id cum ratione!"
  }
];

const getArticles = (req, res) => {
  res.status(200).json(articles);
};

const deleteArticle = (req, res) => {
  const index = articles.findIndex(article => article.id === +req.params.id);
  articles.splice(index, 1);
  res.status(200).json(articles);
};

module.exports = {
  getArticles,
  deleteArticle
};
