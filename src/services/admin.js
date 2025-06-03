import { getToken } from "../utils/auth";

const API = "http://localhost:8082"; // Adjust if needed

export const createCourse = async (course) => {
  const res = await fetch(`${API}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(course),
  });
  return res.ok;
};

export const fetchAllCourses = async () => {
  const res = await fetch(`${API}/courses`);
  return await res.json();
};
