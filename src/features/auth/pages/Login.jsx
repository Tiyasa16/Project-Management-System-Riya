import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../../api/auth.api'; 

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({
        email,
        password,
      });

      console.log("Login success:", res);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-2xl max-w-3xl shadow-lg p-5">

        
        <div className="w-1/2 px-16">
          <h2 className="font-bold text-2xl text-[#002d74]">Login</h2>
          <p className="text-sm mt-4 text-[#002d74]">
            If you already have an account, please login.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 mt-8 rounded-xl border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your Password"
              className="p-2 rounded-xl border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2"
            >
              Login
            </button>

            <p className="text-sm mt-4 text-[#002d74]">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>

          </form>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-5">
          <img
            src="img1.png"
            alt="login visual"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Login;
