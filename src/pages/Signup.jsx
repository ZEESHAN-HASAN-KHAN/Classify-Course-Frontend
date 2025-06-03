import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "", role: "USER" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(form);
    if (res.includes("success")) {
      navigate("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input name="username" onChange={handleChange} placeholder="Username" className="input" />
      <input name="password" onChange={handleChange} placeholder="Password" className="input" />
      <select name="role" onChange={handleChange} className="input">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button type="submit" className="btn">Signup</button>
    </form>
  );
}
