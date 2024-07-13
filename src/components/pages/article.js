import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "prismjs/themes/prism-tomorrow.css";

import axios from "axios";
import NavBar from "../navbar/NavBar";

const Article = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`/articles/${id}.md`)
      .then((response) => setContent(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <NavBar />
      <ArticleDetail id={id} />
      <div className="article-wrapper">
        <Markdown
          rehypePlugins={[rehypePrism]}
          remarkPlugins={[remarkGfm]}
          className={"article"}
        >
          {content}
        </Markdown>
      </div>
    </>
  );
};

export default Article;
