import { motion } from "framer-motion";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import { fadeUpInView } from "src/utils/motion";
import { useState, useContext } from "react";
import { useAuth } from "src/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const logIn = async (event) => {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/");
        console.log("Login success:", data);
        login();
        localStorage.setItem("loggedIn", "true");
      }
    } catch (error) {
      // Handle fetch errors
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-20 p-10 max-w-8xl">
        <motion.form
          {...fadeUpInView()}
          className="flex flex-col justify-center items-center min-w-[28%] max-w-2xl px-4"
          onSubmit={logIn}
        >
          <div className="flex flex-col gap-2 text-center mb-10">
            <h1 className="text-5xl">Login</h1>
            <br />
            <p className="text-lg">Please enter your email and password</p>
          </div>

          <div className="w-full flex flex-col gap-4 mb-8">
            <div className="relative flex items-center pl-2 gap-4 rounded-lg border-2 border-gray-600">
              <MdOutlineMailOutline className="h-8 w-8" />
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-none bg-transparent peer outline-none"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute bg-transparent peer-focus:bg-black peer-focus:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-8 left-9 cursor-text"
              >
                Email
              </label>
            </div>

            <div className="relative flex items-center pl-2 gap-4 rounded-lg border-2 border-gray-600">
              <BsKey className="h-8 w-8" />
              <input
                type="password"
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-none bg-transparent peer outline-none"
                placeholder=" "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute bg-transparent peer-focus:bg-black peer-focus:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-8 left-9 cursor-text"
              >
                Password
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center w-full">
            <button className="border-2 text-black bg-white border-grey rounded-full text-lg px-12 py-2 w-[80%] hover:text-white hover:bg-black transition duration-500 ease-in-out">
              Login
            </button>
            <p>
              Not a user yet?{" "}
              <a className="text-sky-800" href="/register">
                Register
              </a>
            </p>
          </div>
        </motion.form>
      </div>
    </>
  );
}
