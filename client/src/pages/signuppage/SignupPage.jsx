/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import "./SignupPage.css";

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
      await axios
        .post("http://localhost:3310/api/users/register", data)
        .finally(() => navigate("/login"));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="title-signup"> CREER UN COMPTE </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-signup">
        <div>
          <label htmlFor="lastname" className="label-form">
            {" "}
            Nom{" "}
          </label>
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
        </div>
        <div className="signup-input">
          <label htmlFor="firstname" className="label-form">
            {" "}
            Prenom{" "}
          </label>
          <input
            type="text"
            name="firstname"
            className="input-signup-name"
            {...register("firstname", {
              required: "Ce champs est requis",
              minLength: {
                value: 2,
                message: "Un minimum de 2 caractères est requis",
              },
            })}
          />
          {errors.firstname && <span> {errors.firstname.message}</span>}
        </div>
        <div className="signup-input">
          <label htmlFor="email" className="label-form">
            {" "}
            Email{" "}
          </label>
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
        </div>
        <div className="signup-input">
          <label htmlFor="password" className="label-form">
            {" "}
            Mot de passe{" "}
          </label>
          <input
            type="password"
            name="password"
            className="input-signup-psw"
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
        </div>
        <div className="signup-input">
          <label htmlFor="confirmpassword" className="label-form">
            {" "}
            Comfirmez le mot de passe{" "}
          </label>
          <input
            type="password"
            name="confirmpassword"
            className="input-signup-confirm"
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
        </div>
        <div className="position-button">
          <button type="submit" className="button-signup">
            {" "}
            Créer{" "}
          </button>
        </div>
      </form>
      <div>
        <p className="link-login">
          {" "}
          Si vous avez deja un compte{" "}
          <Link to="/login" className="button-go"> connectez-vous ici </Link>
        </p>
      </div>
    </>
  );
}
