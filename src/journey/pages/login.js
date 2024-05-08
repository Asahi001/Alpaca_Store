import React from "react";
import alpaca from "../../assets/images/alpaca.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-md border-2 border-blue-500"
        >
          <h2 className="text-2xl font-bold flex justify-center text-blue-500 pb-4">
            Login
          </h2>
          <div className="flex justify-center mb-5">
            <img
              className="w-12 h-12"
              src={alpaca}
              alt={`Image Not Found - 404`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 w-3/4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <a
              href="#"
              className="flex justify-end align-baseline text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
