/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useOutletContext, useNavigate, Link } from "react-router-dom";

import axios from "axios";

import "./LoginPage.css";

export default function LoginPage() {
  const { curentUser, setCurrentUser } = useOutletContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios
        .post("http://localhost:3310/api/auth/login", data, {
          withCredentials: true,
        })
        .finally(() => navigate("/"))
        .then((response) => {
          setCurrentUser(response.data.user);
        });
      console.warn(curentUser);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      
      <h1 className="title-login"> Connexion </h1>
      <section >
        <form onSubmit={handleSubmit(onSubmit)} className="form-login">
          <div>
            <label htmlFor="email" className="label-form"> Email </label>
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
          <div>
            <label htmlFor="password" className="label-form"> Mot de passe</label>
            <input
              type="password"
              name="password"
              className="input-login-pwd"
              {...register("password", {
                require: "Ce champs est requis",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
                  message: "Format invalide",
                },
              })}
            />
            {errors.confirmpassword && (
              <span> {errors.confirmpassword.message} </span>
            )}
          </div>
          <div className="position-button-login"> 
          <button type="submit" className="button-login"> Se connecter </button>
       </div>  </form>
      </section>
      <div>
        <p className="link-login">
          {" "}
          Si vous n'avez pas encore de compte{" "}
          <Link to="/signup" className="button-go">
            {" "}
            inscrivez-vous ici{" "}
          </Link>
        </p>
      </div>
    </>
  );
}
