import React from "react";
import { useForm } from "react-hook-form";

const Name = ({ formData, setForm, navigation }) => {
  const { register } = useForm();
  //  trigger, errors both props were removed
  return (
    <div className="form-field mt-7">
      <h3 className="text-lg">What would you like us to call you? </h3>
      <input
        className="small-input bg-white rounded-full  border mt-5 border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        type="text"
        placeholder="Name-eg(Alias)"
        value={formData.name}
        onChange={setForm}
        ref={register({ required: true, minLength: 2 })}
      />
      <div className="buttonDiv flex justify-between mt-6">
        <button
          className="prevButton bg-transparent text-center underline border-none text-gray-500"
          onClick={() => navigation.previous()}
        >
          Previous{" "}
        </button>
        <button
          onClick={() => navigation.next()}
          className="nextButton  flex   text-white bg-blue-600 border-0 py-1 px-4 focus:outline-none hover:bg-blue-300  rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Name;
