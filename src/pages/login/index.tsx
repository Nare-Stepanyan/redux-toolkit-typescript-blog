import React, { useEffect } from "react";
import { useAppDispatch } from "app/hooks";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "redux/services/authApi";
import { setIsLoggedIn } from "redux/features/authSlice";

import Layout from "layout";
import styles from "./login.module.scss";

type FormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const [loginUser, { data }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();

  useEffect(() => {
    if (data && data.accessToken) {
      console.log(data, data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.accessToken));
      dispatch(setIsLoggedIn(true));
      navigate("/");
    }
  }, [data]);

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    await loginUser(formData);
  };

  return (
    <Layout>
      <div
        className={`${styles.wrapper} d-flex justify-content-center align-items-cemter mt-40 mb-80`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="pa-20">
          <p className="mv-20">Sign in</p>
          <div className="mb-20">
            <input
              type="email"
              {...register("email")}
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-20">
            <input
              type="password"
              {...register("password")}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="pa-10">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Login;
