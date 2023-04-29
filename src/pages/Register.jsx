import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login as saveUserCreds } from "../features/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signUp(email, password, name);

      dispatch(
        saveUserCreds({
          displayName: user.displayName,
          email: user.email,
          // photoUrl: user.photoURL,
        })
      );

      toast.success("User created successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create user!");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center shadow-md bg-cover bg-gray-400">
      <form
        className="bg-white flex flex-col w-1/3 space-y-10 p-5 border-t-4 border-[#0195FF] rounded"
        onSubmit={handleSubmit}
      >
        <h3 className="text-3xl font-semibold text-center">
          Welcome to Macula!
        </h3>

        <input
          type="text"
          className="p-2 border rounded-md"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="p-2 border rounded-md"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="p-2 border rounded-md"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#0195FF] text-white p-2 rounded-lg"
        >
          {" "}
          Register{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;