import { useEffect, useState } from "react";
import "./ArticleRandom.css";

export default function ArticleRandom() {
  const [articleRandom, setArticleRandom] = useState();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch("http://localhost:3310/api/articles");
      const data = await response.json();
      setArticleRandom(data);
    };
    fetchArticle();
  }, []);
  console.info("random is", articleRandom);

  return (
    <> 
    <h1 className="title-random"> Articles similaires </h1> 
    <section className="random-container">
      {articleRandom?.map((f) => (
       <div key={f} className="random-article"> 
          <img alt="" src={f.image} className="random-image"/>
          <h1 key={f.reference}> {f.reference} </h1>
       </div>
      ))}
    </section>
    </> 
  );
}
