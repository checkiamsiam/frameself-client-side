import React from "react";
import { monthDetector } from "../../features/signUpFeature";

const DateInputInSingUpForm = ({ register, days }) => {
  return (
    <>
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
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          name="birthMonth"
          id="birthMonth"
          className="w-1/3 px-3 py-1 rounded-md text-xl border-[1px]"
          {...register("birthMonth", {
            required: { value: true, message: "birth month isn't selected" },
          })}
        >
          {Array.from(new Array(12), (element, index) => index).map((monthIndex, index) => (
            <option key={index} value={monthIndex}>
              {monthDetector(monthIndex)}
            </option>
          ))}
        </select>
        <select
          name="birthYear"
          id="birthYear"
          className="w-1/3 px-3 py-1 rounded-md text-xl  border-[1px]"
          {...register("birthYear", {
            required: { value: true, message: "birth Year isn't selected" },
          })}
        >
          {Array.from(new Array(100), (element, index) => new Date().getFullYear() - 14 - index).map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DateInputInSingUpForm;
