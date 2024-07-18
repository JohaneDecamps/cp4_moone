/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "./ArticleDelete.css";
import 'react-toastify/dist/ReactToastify.css';

export default function ArticlesDelete() {
  const [article, setArticle] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataArticles) => {
    try {
      await axios.delete(
        `http://localhost:3310/api/articles/${dataArticles.id}`,
        dataArticles
      );
      toast.success("L'article a bien été supprimé")
    } catch (err) {
      console.error(err);
      toast.error("Une erreur est survenue")
    }
    console.info("data", dataArticles);
  };

  useEffect(() => {
    try {
      axios.get("http://localhost:3310/api/articles").then((response) => {
        const { data } = response;
        setArticle(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <section className="form-delete-container">
      <h1 className="title-form"> Supprimer un article </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-delete-article">
          <label htmlFor="categories"> Supprimer un article </label>
          <select
            name="article"
            {...register("id", {
              required: "Veuillez selectionner un article",
            })}
          >
            <option value="" className="option-category-article">
              {" "}
              Selectionnez un article{" "}
            </option>
            {article?.map((a) => (
              <option
                className="option-category-article"
                key={a.id}
                value={a.id}
              >
                {a.reference}
              </option>
            ))}
            {errors.image && <span> {errors.image.message} </span>}
          </select>
        </div>
        <button type="submit" className="delete-button-category">
          {" "}
          Effacer l'article
        </button>
      </form>
    </section>
  );
}