import { useState } from "react";
import { createCourse } from "../services/course";
import { getToken } from "../utils/auth";

export default function AddCourse() {
  const [form, setForm] = useState({ title: "", description: "", price: 0 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    // alert("Token: " + token); // Debugging line to see the token
    const res = await createCourse(form, token);
    alert(res);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input name="title" onChange={handleChange} placeholder="Title" className="input" />
      <input name="description" onChange={handleChange} placeholder="Description" className="input" />
      <input name="price" type="number" onChange={handleChange} placeholder="Price" className="input" />
      <button className="btn">Add Course</button>
    </form>
  );
}
