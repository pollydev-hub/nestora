import { Routes, Route } from "react-router-dom";
import News from "../pages/News";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";

const Article = () => (
  <article className="main-article">
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </article>
);
export default Article;
