import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(true);
    navigate("/");
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-[url('https://d5zukw8vdn04n.cloudfront.net/wp-content/uploads/2018/11/bigstock-Data-Technology-Background-Ab-258428140-825x510.jpg')]">
      <form
        className="bg-white flex flex-col w-1/3 space-y-10 p-5 border-t-4 border-[#0195FF]"
        onSubmit={handleSubmit}
      >
        <h3 className="text-3xl font-semibold text-center">
          Welcome to Macula!
        </h3>
        <input
          type="text"
          className="p-2 border rounded-md"
          placeholder="Enter your email"
        />
        <input
          type="password"
          className="p-2 border rounded-md"
          placeholder="********"
        />
        <button
          type="submit"
          className="bg-[#0195FF] text-white p-2 rounded-lg"
        >
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
