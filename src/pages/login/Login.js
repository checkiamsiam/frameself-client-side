import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";


const Login = () => {
  
  return (
    <div className="lg:px-36 md:px-20 px-5 bg-bg-secondary pt-10">
      <div className="md:flex min-h-screen justify-center items-center">
        <div className="md:w-1/2 md:pb-32 pb-5">
          <h1 className="text-blue-color  text-5xl md:text-left text-center sm:font-bold font-semibold mb-2">fr@meself</h1>
          <p className={"text-primary-color md:text-left sm:text-2xl text-[1.2rem] text-center "}>
            Grow your connection and share your activity to your homies.
          </p>
        </div>
        <div className="md:w-1/2 w-full md:pb-20 pb-5">
          <div className="bg-bg-primary max-w-sm rounded-xl shadow-shadow-one shadow-lg p-5 mx-auto">
            <LoginForm/>
            <div className="text-center my-4">
              <a href="" className="text-center link link-hover text-blue-600">
                Forgotten password?
              </a>
            </div>
            <hr className="text-divider-color" />
            <div className="flex justify-center pt-5">
              <button className="px-3 py-3 text-center rounded-lg cursor-pointer text-bg-primary font-bold text-md bg-green-color hover:bg-[#36A420]">
                Create new account
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
            <span className="font-bold link link-hover">Create a Page</span> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
