/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";

import axios from "axios";
import {useOutletContext} from "react-router-dom"

export default function LoginPage() {
const {curentUser, setCurrentUser} = useOutletContext()

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
        .then((response) => {
          setCurrentUser(response.data.user);
        }); 
        console.warn(curentUser)
    } catch (err) {
      console.error(err);
    } console.info("data", data)
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <label htmlFor="password"> Mot de passe</label>
        <input
          type="password"
          name="password"
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

        <button type="submit"> Se connecter </button>
      </form>
    </section>
  );
}
