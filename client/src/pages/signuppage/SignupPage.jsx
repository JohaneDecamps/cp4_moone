/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3310/api/users/register", data).finally(()=> navigate("/login"))
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1> CREER UN COMPTE </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="lastname"> Nom </label>
        <input
          type="text"
          name="lastname"
          {...register("lastname", {
            required: "Ce champs est requis",
            minLength: {
              value: 2,
              message: "Un minimum de 2 caractères est requis",
            },
          })}
        />
        {errors.lastname && <span> {errors.lastname.message} </span>}

        <label htmlFor="firstname"> Prenom </label>
        <input
          type="text"
          name="firstname"
          {...register("firstname", {
            required: "Ce champs est requis",
            minLength: {
              value: 2,
              message: "Un minimum de 2 caractères est requis",
            },
          })}
        />
        {errors.firstname && <span> {errors.firstname.message}</span>}

        <label htmlFor="email"> Email </label>
        <input
          type="text"
          name="email"
          {...register("email", {
            required: "Ce chammps est requis",
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              message: "Le format de votre email est incorrecte",
            },
          })}
        />
        {errors.email && <span> {errors.email.message} </span>}

        <label htmlFor="password"> Mot de passe </label>
        <input
          type="password"
          name="password"
          {...register("password", {
            require: "Ce champs est requis",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
              message:
                "Le mot de passe doit contenir au minimum 8 caractères dont une majuscule, un nombre et un caractère spécial",
            },
          })}
        />
        {errors.password && <span> {errors.password.message} </span>}

        <label htmlFor="confirmpassword"> Comfirmez le mot de passe </label>
        <input
          type="password"
          name="confirmpassword"
          {...register("confirmpassword", {
            require: "Ce champs est requis",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
              message: "Format invalide",
            },
            validate: (value) =>
              value === watch("password") ||
              "Les mots de passe ne correspondent pas ",
          })}
        />
        {errors.confirmpassword && (
          <span> {errors.confirmpassword.message} </span>
        )}
        <button type="submit"> S'inscrire </button>
      </form>
    </>
  );
}
