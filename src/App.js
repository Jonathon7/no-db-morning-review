import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get("/api/articles").then(response => {
      this.setState({
        articles: response.data
      });
    });
  }

  deleteArticle = id => {
    // console.log(id);
    axios.delete(`/api/articles/${id}`).then(response => {
      this.setState({
        articles: response.data
      });
    });
  };

  render() {
    let displayArticles = this.state.articles.map(article => {
      return (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          <button onClick={() => this.deleteArticle(article.id)}>Delete</button>
        </div>
      );
    });
    return <div className="App">{displayArticles}</div>;
  }
}

export default App;
