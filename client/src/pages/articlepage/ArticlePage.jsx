import { useLoaderData } from "react-router-dom";

import ArticleCard from "../../components/articlecard/ArticleCard";
import ArticleRandom from "../../components/articlerandom/ArticleRandom";

import back from "../../assets/logos/back.png"
import "./ArticlePage.css"

export default function ArticlePage() {
  const articleDatas = useLoaderData();

const handleBack = () => {
  window.history.back();
}

  return (
    <>
    <button type="button" className="button-back" onClick={handleBack}> 
    <img src={back} alt="back"/>
    </button>
    <section className="container-articlePage">
      <ArticleCard article={articleDatas} />
 </section>
   <h1 className="title-random"> Plus d'articles </h1>
      <ArticleRandom />
    </>
  );
}
