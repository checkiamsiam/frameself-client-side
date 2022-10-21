import React from 'react';

const GenderInputInSignUP = ({register}) => {
  return (
    <>
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
    </>
  );
};

export default GenderInputInSignUP;