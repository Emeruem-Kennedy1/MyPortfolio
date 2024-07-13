import React, { useEffect, useState } from "react";

const findBlogDetails = async (id) => {
  // convert the rss json to an array of objects
  const response = await fetch("/blog_rss.json");
  const data = await response.json();
  const articles = data.articles;

  // find the article with the matching id
  const article = articles.find((article) => article.id === id);

  return article;
};

const ArticleDetail = ({ id }) => {
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    findBlogDetails(id).then((article) => setArticleDetails(article));
  }, [id]);

  return (
    <div className="article-wrapper">
      <div className="article">
        {articleDetails ? (
          <>
            <img src={articleDetails.image} alt={articleDetails.title} />
            <h1>{articleDetails.title}</h1>
            <p>{articleDetails.publish_date}</p>
            <p>{articleDetails.author}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
