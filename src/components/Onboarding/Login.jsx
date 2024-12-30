import React from "react";

const Login = () => {
  return (
    <>
      <form className="p-4">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          type="email"
          placeholder="johndoe@youremail.com"
          className="w-full p-2 rounded-lg border border-2 border-blue-300 mb-2"
        />
        <label className="text-lg">Password</label>
        <input
          type="password"
          placeholder="enter your password"
          className="w-full p-2 rounded-lg border border-2 border-blue-300 mb-2"
        />

        <button className="w-full bg-blue-300 rounded-xl px-4 py-2 text-white text-lg ">
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
