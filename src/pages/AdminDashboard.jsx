import { useEffect, useState } from "react";
import { fetchAllCourses } from "../services/course";

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchAllCourses(localStorage.getItem('token')).then(setCourses);
  }, []);

  return (
    <div className="p-4">
      <h2>All Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.title} - ₹{c.price}</li>
        ))}
      </ul>
    </div>
  );
}
