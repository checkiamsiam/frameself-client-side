import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signUp = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(signUp)}>
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
              <div class="w-8 overflow-hidden inline-block absolute left-2 -top-2 ">
                <div class=" h-3 w-3 bg-error -rotate-45 transform origin-top-left"></div>
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
              <div class="w-8 overflow-hidden inline-block absolute left-2 -top-2 ">
                <div class=" h-3 w-3 bg-error -rotate-45 transform origin-top-left"></div>
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
        <h6 className="text-sm">
          Date of birth <i className="info_icon"></i>
        </h6>
        <div className="flex gap-3 mt-1 justify-between">
          <select
            name="birthDay"
            id="birthDay"
            className="w-1/3 px-3 py-1 rounded-md text-xl border-[1px]"
            {...register("birthDay", {
              required: { value: true, message: "birthday isn't selected" },
              max: { value: 31, message: "invalid date selected" },
              min: { value: 1, message: "invalid date selected" },
            })}
          >
            <option value="14">14</option>
          </select>
          <select
            name="birthMonth"
            id="birthMonth"
            className="w-1/3 px-3 py-1 rounded-md text-xl border-[1px]"
            {...register("birthMonth", {
              required: { value: true, message: "birth month isn't selected" },
            })}
          >
            <option value="oct">oct</option>
            <option value="oct">jov</option>
            <option value="oct">oct</option>
          </select>
          <select
            name="birthYear"
            id="birthYear"
            className="w-1/3 px-3 py-1 rounded-md text-xl  border-[1px]"
            {...register("birthYear", {
              required: { value: true, message: "birth Year isn't selected" },
            })}
          >
            <option value="1044">1044</option>
            <option value="2022">2022</option>
            <option value="oct">oct</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <h6 className="text-sm">
          Gender <i className="info_icon"></i>
        </h6>
        <div className="flex gap-3 mt-1 justify-between">
          <label htmlFor="femaleGenderRadio" className="flex justify-between w-1/3 px-3 py-2 rounded-md border-[1px]">
            <span>Female</span>
            <input defaultChecked value="female" type="radio" name="gender" id="femaleGenderRadio" className="" {...register("gender")} />
          </label>
          <label htmlFor="maleGenderRadio" className="flex justify-between w-1/3 px-3 py-2 rounded-md border-[1px]">
            <span>Male</span>
            <input value="male" type="radio" name="gender" id="maleGenderRadio" className="" {...register("gender")} />
          </label>
          <label htmlFor="transgenderRadio" className="flex justify-between w-1/3 px-3 py-2 rounded-md border-[1px]">
            <span>Transgender</span>
            <input value="transgender" type="radio" name="gender" id="transgenderRadio" className="" {...register("gender")} />
          </label>
        </div>
      </div>
      <div>
        <p className="text-xs">
          By clicking Sign Up, you agree to our
          <span className="link link-hover text-blue-color">Terms</span>, <span className="link link-hover text-blue-color">Privacy Policy</span> and{" "}
          <span className="link link-hover text-blue-color">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any
          time.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <input
          className="bg-green-color hover:bg-green-600 text-white font-bold text-xl px-20 py-1 rounded-lg cursor-pointer"
          type="submit"
          value="Sign Up"
        />
      </div>
    </form>
  );
};

export default SignupForm;
