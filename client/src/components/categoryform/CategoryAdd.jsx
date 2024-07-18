/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

import "./CategoryAdd.css";

export default function CategoryAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataCategory) => {
    try {
      await axios.post("http://localhost:3310/api/categories", dataCategory);
      toast.success("La categorie a bien été ajouté")
    } catch (err) {
      console.error(err);
      toast.error("Une erreur est survenue")
    }
    console.info("datacat:", dataCategory);
  };

  return (
    <section className="container-category">
      <h1 className="title-form"> Ajouter une Catégorie </h1>
      <form className="form-add-article" onSubmit={handleSubmit(onSubmit)}>
       <div>
        <label htmlFor="category"> Nom de la categorie </label>
        <input
          type="text"
          name="category"
          className="input-name-category"
          {...register("name", {
            required: "ce champs est requis",
          })}
        />
        {errors.name && <span> {errors.name.message} </span>}
</div>
        <button className="button-add-article" type="submit">
          {" "}
          Ajouter une categorie{" "}
        </button>
      </form>
    </section>
  );
}
