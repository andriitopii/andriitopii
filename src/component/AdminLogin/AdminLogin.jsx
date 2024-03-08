import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../bd/firebase";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });


    const auth = getAuth();
    const navigate = useNavigate()
  const logIn = (data) => {
    const email = getValues("email");
    const password = getValues("password");
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      navigate("/admin/dashboard")
    }).catch((err)=> setErrLogin(false));
  };



  return (
    <form onSubmit={handleSubmit(logIn)} className="admin__login-form">
      <input
        {...register("email", { required: { value: true, message: "Email не введено"} })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true, minLength: { value: 6, message: "Пароль не валідний"}})}
        type="password"
        placeholder="Password"
      />
      <div className="input__error">
        {errors?.password && (errors?.password?.message || "Error")}
        <br></br>
        {errors?.email && (errors?.email?.message || "Error")}
      </div>
      <button className="btn-form" disabled={!isValid}>Login</button>
    </form>
  );
};

export default AdminLogin;
