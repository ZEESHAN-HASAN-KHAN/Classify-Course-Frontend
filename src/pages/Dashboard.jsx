// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import { fetchAllCourses, enrollCourse } from "../services/course";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to log in first!");
      return;
    }
    fetchAllCourses(token).then(setCourses);
  }, []);

  const handleEnroll = async (id) => {
    const msg = await enrollCourse(id);
    alert(msg);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      {courses.map((course) => (
        <div key={course.id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl">{course.title}</h2>
          <p>{course.description}</p>
          <button onClick={() => handleEnroll(course.id)} className="btn mt-2">
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
}
