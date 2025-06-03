import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseById, enrollCourse } from "../services/course";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseById(id).then(setCourse);
  }, [id]);

  const handleEnroll = async () => {
    const ok = await enrollCourse(id);
    alert(ok ? "Enrolled successfully" : "Failed to enroll");
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Price:</strong> ₹{course.price}</p>
      <ul>
        {course.features?.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <button onClick={handleEnroll} className="btn">Enroll</button>
    </div>
  );
}
