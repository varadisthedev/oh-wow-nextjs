"use client";

import { useState } from "react";

type Errors = {
  username?: string;
  password?: string;
};

export const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};

    // username validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // if any errors exist, stop submission
    if (Object.keys(newErrors).length > 0) return;

    // form is valid
    console.log("Submitting form:", { username, password });
  };

  return (
    <>
      <button className="bg-blue-950 font-extrabold text-white text-4xl rounded-2xl m-3 w-85 h-20
      focus:ring-1 focus:ring-blue-800 hover:shadow-2xl" type="button" onClick={() => setCount(count + 1)}>
        COUNT: <span className="text-blue-300 font-extrabold text-4xl">{count}</span>
      </button>

      <form onSubmit={handleSubmit} className="bg-slate-900 w-5xl max-h-1/3">
        <div>
          <label className="">Username</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username}</p>
          )}
        </div>

        <br />

        <div>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </>
  );
};
