import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const login = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <div className="mb-3 relative">
          <input
            className={`w-full px-3 py-3 rounded-lg  border-[1px] ${
              errors.email ? "border-error focus:outline-error" : "border-dark-color-secondary focus:outline-blue-color"
            }`}
            type="email"
            name="email"
            placeholder="Your email adress"
            {...register("email", {
              required: { value: true, message: "Enter your email" },
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors?.email && (
            <>
              <p className=" text-white text-center absolute w-full px-3 py-3 rounded-lg bg-error -top-14 ">{errors.email.message}</p>
              <div className="w-8 overflow-hidden inline-block absolute left-2 -top-2 ">
                <div className=" h-3 w-3 bg-error -rotate-45 transform origin-top-left"></div>
              </div>
            </>
          )}
        </div>
        <div className="mb-3 relative">
          <input
            className={`w-full px-3 py-3 rounded-lg  border-[1px] ${
              errors.password ? "border-error focus:outline-error" : "border-dark-color-secondary focus:outline-blue-color"
            }`}
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Enter your password" },
              minLength: { value: 8, message: "Password length is too short" },
            })}
          />
          {errors?.password && (
            <>
              <p className=" text-white text-center md:absolute w-full px-3 py-3 rounded-lg bg-error md:-left-[103%]  top-0 md:mt-0 mt-2">
                {errors.password.message}
              </p>
              <div className="md:h-8 w-8 overflow-hidden inline-block absolute md:-left-3 md:top-2 top-12 left-2  ">
                <div className=" h-3 w-3 bg-error md:rotate-45 rotate-45 transform md:origin-top-left origin-bottom-left"></div>
              </div>
            </>
          )}
        </div>
        <input
          className="w-full bg-blue-color py-3 text-center rounded-lg cursor-pointer text-bg-primary font-bold text-xl hover:bg-[#166FE5]"
          type="submit"
          value="Log in"
        />
      </form>
      <div className="text-center my-4">
        <a href="" className="text-center link link-hover text-blue-600">
          Forgotten password?
        </a>
      </div>
    </>
  );
};

export default LoginForm;
