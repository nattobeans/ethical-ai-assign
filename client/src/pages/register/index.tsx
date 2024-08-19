import { motion } from "framer-motion";
import { React } from "react";
import axios from "axios";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { fadeUpInView } from "src/utils/motion";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
    setLoading(true);

    const credentials = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
        console.log("Register success:", data);
        //localStorage.setItem("authToken", token);
        // setCurrentUser(user);
      }
    } catch (error) {
      // Handle fetch errors
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="flex justify-center items-center mt-20 p-10 max-w-8xl">
        {/* form container */}
        <motion.form
          {...fadeUpInView()}
          className="flex flex-col justify-center items-center min-w-[28%] max-w-2xl px-4"
          onSubmit={handleSubmit}
        >
          {/* form header */}
          <div className="flex flex-col gap-2 text-center mb-10">
            <h1 className="text-5xl">Register here! </h1>
            <br />
            <p> Welcome to Ethical AI! </p>
            <p>
              {" "}
              For <b>Email</b>, please input your University of Auckland email
            </p>
          </div>
          {/* First row of inputs, first name and last name */}
          <div className="w-full flex flex-col gap-4 mb-8">
            <div className="relative flex items-center pl-2 gap-4 mb-0 rounded-lg border-2 border-gray-400">
              <AiOutlineUser className="h-8 w-8" />
              <input
                type="text"
                id="name"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-none bg-transparent peer outline-none"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label
                htmlFor="name"
                className="absolute bg-transparent peer-focus:bg-black peer-focus:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-8 left-9 cursor-text"
              >
                Name
              </label>
            </div>

            <div className="relative flex items-center pl-2 gap-4 rounded-lg border-2 border-gray-400">
              <MdOutlineMailOutline className="h-8 w-8" />
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-none bg-transparent peer outline-none"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="absolute bg-transparent peer-focus:bg-black peer-focus:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-8 left-9 cursor-text"
              >
                Email
              </label>
            </div>
            {/* third row of inputs, password */}
            <div className="relative flex items-center pl-2 gap-4 rounded-lg border-2 border-gray-400">
              <BsKey className="h-8 w-8" />
              <input
                type="password"
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-none bg-transparent peer outline-none"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="password"
                className="absolute bg-transparent peer-focus:bg-black peer-focus:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-8 left-9 cursor-text"
              >
                Password
              </label>
            </div>
            {/* fourth row of inputs, confirm password */}
            <div className="relative flex items-center pl-2 gap-4 rounded-lg border-2 border-gray-400">
              <BsKey className="h-8 w-8" />
              <input
                type="password"
                id="confirmPassword"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-none bg-transparent peer outline-none"
                placeholder=" "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label
                htmlFor="confirmPassword"
                className="absolute bg-transparent peer-focus:bg-black peer-focus:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-8 left-9 cursor-text"
              >
                Confirm Password
              </label>
            </div>
            {/* error message for password mismatch, redered conditionally*/}
            {passwordError && (
              <p style={{ color: "red" }}>*Passwords do not match</p>
            )}
            {!passwordError && <div style={{ height: "1.5rem" }}></div>}
          </div>

          <div className="flex flex-col gap-4 items-center w-full">
            <button
              disabled={loading}
              className="border-2 text-black bg-white border-grey rounded-full text-lg px-12 py-2 w-[80%] hover:text-white hover:bg-black transition duration-500 ease-in-out"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <a className="text-sky-200" href="/login">
                Login!
              </a>
            </p>
          </div>
        </motion.form>
      </div>
    </>
  );
}
