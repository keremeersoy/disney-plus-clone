import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { auth } from "../firebase";
import Footer from "../components/footer";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    console.log("geldi");
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // toast.success("Register success");
        // console.log("success");
        // console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        toast.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="h-screen bg-[#1A1D29] flex flex-col ">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <div className="flex justify-center content-center items-center grow bg-[#1A1D29]">
        <form className="items-center justify-center">
          <h1 className="text-white font-bold text-3xl flex items-center justify-center p-10">
            Kaydol
          </h1>
          <div className="grid gap-x-3 w-[500px] mb-10 mx-10">
            {" "}
            <label htmlFor="email-address" className="text-white font-bold m-2">
              E-posta Adresi
            </label>
            <input
              className="border-2 p-2 outline-none rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="grid gap-x-3 w-[500px] m-10">
            <label htmlFor="password" className="text-white font-bold m-2">
              Şifre
            </label>
            <input
              className="border-2 p-2 outline-none rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="******"
            />
          </div>

          <button
            type="submit"
            onClick={handleRegister}
            className="border-2 p-2 w-[500px] m-10 bg-[#0e0b14] hover:bg-gray-500 text-white duration-300 rounded-md border-gray-500"
          >
            Kaydol
          </button>
          <div className="m-10 flex items-center justify-center space-x-2">
            <div className="text-gray-400">Hesabın var mı ?</div>
            <button
              className="text-gray-300 hover:text-white duration-300"
              onClick={() => {
                navigate("/login");
              }}
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
