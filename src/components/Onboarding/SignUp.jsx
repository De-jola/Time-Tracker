import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import Login from "./Login";

const SignUp = () => {
  const navigate = useNavigate();
  const [displayLogin, setDisplayLogin] = useState(false);
  const handleLogin = () => {
    setDisplayLogin(!displayLogin);
  };

  const gotToHomePage = () => {
    navigate("/dashboard");
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 30,
        duration: 0.5,
      }}
    >
      <section className=" bg-white  p-4 rounded-t-[2rem]">
        <h1 className="text-3xl text-blue-300 font-bold">Create an Account</h1>

        <form className="p-4">
          <label className="text-lg">First Name</label>
          <input
            type="text"
            placeholder="John"
            className="w-full p-2 rounded-lg border border-2 border-blue-300 mb-2"
          />
          <label className="text-lg">Last Name</label>
          <input
            type="text"
            placeholder="Doe"
            className="w-full p-2 rounded-lg border border-2 border-blue-300 mb-2"
          />
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
            placeholder="set your password"
            className="w-full p-2 rounded-lg border border-2 border-blue-300 mb-2"
          />
          <label className="text-lg">Confirm Password</label>
          <input
            type="password"
            placeholder="re-enter your password"
            className="w-full p-2 rounded-lg border border-2 border-blue-300 mb-4"
          />
          <button
            className="w-full bg-blue-300 rounded-xl px-4 py-2 text-white text-lg "
            onClick={gotToHomePage}
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-gray-500 inline">Already have an account? </p>
          <a href="#" className="text-lg text-blue-400">
            {" "}
            Login
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default SignUp;
