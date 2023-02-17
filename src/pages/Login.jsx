import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    console.log("giriş yakalandı");
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("giriş yapıldı");
        toast.success("Giriş Yapılıyor");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage, errorCode);
      });
  };

  return (
    <div className="h-screen bg-[#1A1D29] flex flex-col ">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <div className="flex justify-center content-center items-center grow bg-[#1A1D29]">
        <form className="items-center justify-center">
          <h1 className="text-white font-bold text-3xl flex items-center justify-center p-10">
            Giriş Yap
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
            onClick={handleLogin}
            className="border-2 p-2 w-[500px] m-10 bg-[#0e0b14] hover:bg-gray-500 text-white duration-300 rounded-md border-gray-500"
          >
            Giriş Yap
          </button>
          <div className="m-10 flex items-center justify-center space-x-2">
            <div className="text-gray-400">Hesabın yok mu ?</div>
            <button
              className="text-gray-300 hover:text-white duration-300"
              onClick={() => {
                navigate("/register");
              }}
            >
              Kaydol
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
