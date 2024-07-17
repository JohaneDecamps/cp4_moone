
import { useLoaderData } from "react-router-dom";

import ArticleCard from "../../components/articlecard/ArticleCard";
import ArticleRandom from "../../components/articlerandom/ArticleRandom";

import "./ArticlePage.css"

export default function ArticlePage() {
  const articleDatas = useLoaderData();
  console.info("article séléctionné:", articleDatas);

  return (
    <>
    <section className="container-articlePage">
      <ArticleCard article={articleDatas} />
 </section>
   <h1 className="title-random"> Articles similaires </h1>
      <ArticleRandom />
    </>
  );
}
