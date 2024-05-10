import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "prismjs/themes/prism-tomorrow.css";

import axios from "axios";

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
    <div className="article-page">
      <Markdown
        rehypePlugins={[rehypePrism]}
        remarkPlugins={[remarkGfm]}
        className={"article"}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default Article;
