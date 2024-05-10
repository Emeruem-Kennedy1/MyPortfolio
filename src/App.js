import "./css/main.css";
import Root from "./components/pages/root";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/pages/articles";
import Article from "./components/pages/article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
