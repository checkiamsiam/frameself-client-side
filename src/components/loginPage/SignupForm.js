import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "js-cookie";
import { setUser } from "../../actions/userAction";
import reqToServer from "../../features/axiosInstance";
import { configureDays } from "../../features/signUpFeature";
import DateInputInSingUpForm from "./DateInputInSingupForm";
import GenderInputInSignUP from "./GenderInputInSignUP";
import { Navigate, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [days, setDays] = useState(Array.from(new Array(31), (element, index) => 1 + index));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signUp = async (formData) => {
    try {
      setLoading(true);
      const { data } = await reqToServer.post("/user/register", formData);
      dispatch(setUser(data.data));
      Cookies.set("userData", JSON.stringify(data.data));
      setError("");
      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data.message);
    }
  };

  return (
    <form onChange={() => configureDays(formRef, setDays)} ref={formRef} onSubmit={handleSubmit(signUp)}>
      <div className="mb-3 mt-4 relative flex gap-3 justify-between">
        <div className="w-1/2 relative">
          <input
            className={`w-full bg-bg-secondary px-3 py-2 rounded-md  border-[1px] ${
              errors.firstName ? "border-error focus:outline-error" : "border-dark-color-secondary focus:outline-none"
            }`}
            type="text"
            name="firstName"
            placeholder="First name"
            {...register("firstName", {
              required: { value: true, message: "What's your name?" },
            })}
          />

          {errors?.firstName && (
            <>
              <p className=" text-white text-center absolute w-full px-3 py-3 rounded-lg bg-error -top-14 ">{errors.firstName.message}</p>
              <div className="w-8 overflow-hidden inline-block absolute left-2 -top-2 ">
                <div className=" h-3 w-3 bg-error -rotate-45 transform origin-top-left"></div>
              </div>
            </>
          )}
        </div>
        <div className="w-1/2 relative">
          <input
            className={`w-full bg-bg-secondary px-3 py-2 rounded-md  border-[1px] ${
              errors.lastName ? "border-error focus:outline-error" : "border-dark-color-secondary focus:outline-none"
            }`}
            type="text"
            name="lastName"
            placeholder="Surname"
            {...register("lastName", {
              required: { value: true, message: "What's your surname?" },
            })}
          />
          {errors?.lastName && (
            <>
              <p className=" text-white text-center absolute w-full px-3 py-3 rounded-lg bg-error -top-14 ">{errors.lastName.message}</p>
              <div className="w-8 overflow-hidden inline-block absolute left-2 -top-2 ">
                <div className=" h-3 w-3 bg-error -rotate-45 transform origin-top-left"></div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mb-3">
        <input
          className={`w-full bg-bg-secondary px-3 py-2 rounded-md  border-[1px] ${
            errors.email ? "border-error focus:outline-error" : "border-dark-color-secondary focus:outline-none"
          }`}
          type="email"
          name="email"
          placeholder="Enter your email"
          {...register("email", {
            required: { value: true, message: "Enter your email" },
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Please enter a valid email",
            },
          })}
        />
      </div>
      <div className="mb-3">
        <input
          className={`w-full bg-bg-secondary px-3 py-2 rounded-md  border-[1px] ${
            errors.password ? "border-error focus:outline-error" : "border-dark-color-secondary focus:outline-none"
          }`}
          type="password"
          name="password"
          placeholder="New password"
          {...register("password", {
            required: { value: true, message: "Enter your password" },
            minLength: { value: 8, message: "Password length is too short" },
          })}
        />
      </div>
      <div className="mb-3">
        <DateInputInSingUpForm register={register} days={days} />
      </div>
      <div className="mb-3">
        <GenderInputInSignUP register={register} />
      </div>
      <div>
        <p className="text-xs">
          By clicking Sign Up, you agree to our
          <span className="link link-hover text-blue-color">Terms</span>, <span className="link link-hover text-blue-color">Privacy Policy</span> and{" "}
          <span className="link link-hover text-blue-color">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any
          time.
        </p>
      </div>
      {loading && <div className="mt-3 flex justify-center items-center">
        <ClipLoader />
      </div>}
      <div className="flex justify-center mt-4">
        <input
          className="bg-green-color hover:bg-green-600 text-white font-bold text-xl px-20 py-1 rounded-lg cursor-pointer"
          type="submit"
          value="Sign Up"
        />
      </div>
      {error && <p className="text-error mt-3 text-center">{error}</p>}
    </form>
  );
};

export default SignupForm;
