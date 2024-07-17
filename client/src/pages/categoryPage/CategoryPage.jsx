import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../../components/articlecard/ArticleCard";

import imgCollection from "../../assets/images/img-collectionpage.jpeg";
import "./CategoryPage.css"

export default function CategoryPage() {

const [result, setResult] = useState()
const categoryName = useParams();
console.info(result)

  useEffect(()=>{
      const fetchCategory = async () => {
          const response = await fetch(
              `http://localhost:3310/api/categories/${categoryName.name}`
          );
          const data = await response.json();
          setResult(data)
      };
      fetchCategory()
  }, [categoryName])
console.info("result", result)
console.info("categoryname:", categoryName)
    return (
        <> 
        <img
        src={imgCollection}
        className="photo-category"
        alt="photographie"
      />

<h1 className="title-categoryPage"> {categoryName.name} </h1>
        <div className="container-articlecard"> 
            

    {result?.map((b) => (
        <ArticleCard key={b} article={b}/>
    ))}
  </div>
    </>
    )
}