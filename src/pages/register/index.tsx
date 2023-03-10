import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "layout";
import styles from "../login/login.module.scss";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "redux/services/authApi";
import Error from "components/error";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Register = () => {
  const [registerUser, { data, error }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();

  useEffect(() => {
    if (data && data.accessToken) {
      navigate("/login");
    }
  }, [data]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await registerUser(data);
  };

  if (error) return <Error />;
  return (
    <Layout>
      <div
        className={`${styles.wrapper} d-flex justify-content-center align-items-cemter mt-40 mb-80`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="pa-20">
          <p className="mv-20">Register</p>
          <div className="mb-20">
            <input
              type="text"
              {...register("firstName")}
              required
              placeholder="First name"
            />
          </div>
          <div className="mb-20">
            <input
              type="text"
              {...register("lastName")}
              required
              placeholder="Last name"
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
