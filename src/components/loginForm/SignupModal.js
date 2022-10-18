import React from "react";
import SignupForm from "./SignupForm";

const SignupModal = () => {
  return (
    <>
      <input type="checkbox" id="signUpModalCheck" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <div className="flex justify-between mb-2">
            <div>
              <h5 className="text-3xl font-bold">Sign Up</h5>
              <p>It's quick and easy.</p>
            </div>
            <label htmlFor="signUpModalCheck" className="text-black text-xl cursor-pointer font-extrabold">
              ✕
            </label>
          </div>
          <hr />
          <div>
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
