import { useEffect, useState } from "react";
import { fetchMyCourses } from "../services/course";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
      fetchMyCourses().then(setCourses);
      alert("Courses fetched successfully"+ courses.length);
  }, []);

  return (
    <div className="p-4">
      <h2>My Enrolled Courses</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.title} - ₹{c.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
