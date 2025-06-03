import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import { saveToken } from "../utils/auth";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const res = await loginUser(form);
      alert("Response: " + JSON.stringify(res)); // Debugging line to see the response
      const token=await res.text(); // assuming auth-service returns token as plain text
    if (token) {
        saveToken(token);
        alert("Login successful");
      const role = JSON.parse(atob(token.split(".")[1])).role;
      navigate(role === "ADMIN" ? "/admin" : "/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input name="username" onChange={handleChange} placeholder="Username" className="input" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="input" />
      <button type="submit" className="btn">Login</button>
    </form>
  );
}
