// ArticleList.js

import React from 'react';

const ArticleList = () => {
  // Dummy list of articles for demonstration
  const articles = [
    { id: 1, title: "Article 1", content: "Content of Article 1" },
    { id: 2, title: "Article 2", content: "Content of Article 2" },
    // Add more articles as needed
  ];

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
