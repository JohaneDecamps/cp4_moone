import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
        <div className="container-article-category"> 
            

    {result?.map((b) => (
  <Link to ={`/articles/${b.id}`} key={b.reference}> 
       <img src={b.image} className="article-image-category" alt=""/>
       <h1 className="article-reference-category"> {b.reference} </h1>
</Link>
    ))}
  </div>
    </>
    )
}