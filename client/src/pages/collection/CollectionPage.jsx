import { useLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./CollectionPage.css";
import imgCollection from "../../assets/images/img-collectionpage.jpeg";

export default function CollectionPage() {
  const articleData = useLoaderData();
  console.info(articleData);
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:3310/api/categories");
      const data = await response.json();
      setResult(data);
    };
    fetchCategory();
  }, []);
  console.info(result);

  return (
    <>
      <img
        src={imgCollection}
        className="photo-collection"
        alt="photographie"
      />
      <h1 className="title-collection"> LA COLLECTION </h1>
      <section className="container-collection">
        <div className="button-categories">
          {result?.map((c) => (
            <Link to={`/categories/${c.name}`} type="button" key={c.name}>
              {c.name}
            </Link>
          ))}
        </div>
        <div className="articles-collection">
          {articleData?.map((a) => (
              <Link to={`/articles/${a.id}`} key={a.reference}>
                <img src={a.image} className="article-image" alt="" />
                <h1 className="reference"> {a.reference} </h1>
              </Link>
     
          ))}
        </div>
      </section>
    </>
  );
}
