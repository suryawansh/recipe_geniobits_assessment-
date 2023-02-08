import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Typo from "./Typo";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
  };
  return (
    <div className="bg-orange-100 py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-center p-4">
        <div className="w-full md:w-3/4 p-4">
          <Typo fontFamily="Playfair Display" className="text-7xl font-bold">
            Deliciousness <br />to your inbox
          </Typo>
          <p className="my-4 text-xl">
            Enjoy weekly hand picked recipes and recommendations
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center border-b-2 border-gray-800 py-2">
              <input
                className="appearance-none bg-white border-none w-full text-gray-700 mr-3 py-4 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message?.toString()}
                </p>
              )}
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded"
                type="submit"
              >
                Join
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className="text-green-500 text-xs italic">
              Thank you for joining our newsletter
            </p>
          )}
          <p className="text-gray-600 my-3 text-sm">
            By joining our newsletter you agree to our{" "}
            <a href="#" className="text-orange-500">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
