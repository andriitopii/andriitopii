import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../bd/firebase";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const AdminLogin = () => {


  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onSubmit" });


    const auth = getAuth();

  const logIn = (data) => {
    const email = getValues("email");
    const password = getValues("password");
    console.log(email,password);
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    });
  };



  return (
    <form onSubmit={handleSubmit(logIn)} className="admin__login-form">
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <button className="btn-form">Login</button>
    </form>
  );
};

export default AdminLogin;
