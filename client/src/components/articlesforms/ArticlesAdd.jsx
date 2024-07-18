/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./ArticlesAdd.css";

export default function ArticlesAdd() {
  const [category, setCategory] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataArticles) => {
    try {
      await axios.post("http://localhost:3310/api/articles", dataArticles);
      toast.success("L'article a bien été ajouté")
    } catch (err) {
      console.error(err);
      toast.error("Une erreur est survenue")
    }
    console.info("data", dataArticles);
  };

  useEffect(() => {
    try {
      axios.get("http://localhost:3310/api/categories").then((response) => {
        const { data } = response;
        setCategory(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);
  console.info("categorie:", category);

  return (
    
    <section className="form-add-container">
      <h1 className="title-form"> Ajouter un article </h1>
      <form className="form-add-article" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-add-article">
          <label htmlFor="reference"> Reference </label>
          <input
            type="text"
            name="reference"
            className="input-reference-add"
            {...register("reference", {
              required: "ce champs est requis",
            })}
          />
          {errors.reference && <span> {errors.reference.message} </span>}
        </div>
        <div className="input-add-article">
          <label htmlFor="description" className="input-description-add">
            {" "}
            Description{" "}
          </label>
          <input
            type="text"
            name="description"
            className="input-description-article"
            {...register("description", {
              required: "ce champs est requis",
              minLength: {
                value: 2,
                message: "La description doit contenir au minimum 2 caractère",
              },
            })}
          />
          {errors.description && <span> {errors.description.message} </span>}
        </div>
        <div className="input-add-article">
          <label htmlFor="categories"> Categorie </label>
          <select
            name="category"
            className="input-category-article"
            {...register("category_id", {
              required: "Veuillez selectionner une categorie",
            })}
          >
            <option value="" className="input-category-article">
              {" "}
              Selectionnez une categorie{" "}
            </option>
            {category?.map((c) => (
              <option
                className="input-category-article"
                key={c.id}
                value={c.id}
              >
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-add-article">
          <label htmlFor="image"> Image </label>
          <input
            type="text"
            name="image"
            placeholder="Veuillez entrer une url"
            className="input-image-article"
            {...register("image", {
              required: "ce champs est requis",
            })}
          />
          {errors.image && <span> {errors.image.message} </span>}
        </div>
        <button className="button-add-article" type="submit">
          {" "}
          Ajouter un article{" "}
        </button>
      </form>
    </section>

  );
}
