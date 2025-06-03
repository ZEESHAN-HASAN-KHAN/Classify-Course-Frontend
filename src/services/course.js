const BASE_URL = "http://localhost:8082"; // adjust for course-service port

export async function createCourse(course, token) {
  const res = await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(course),
  });
  return res.text();
}

export async function fetchAllCourses(token) {
  const res = await fetch(`${BASE_URL}/courses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

export async function enrollCourse(courseId) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/enroll/${courseId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.text();
}
export const fetchCourseById = async (id) => {
  const res = await fetch(`${BASE_URL}/courses/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return await res.json();
};
export const fetchMyCourses = async () => {
  const res = await fetch(`${BASE_URL}/courses/my-courses`, {
    headers: {
      method: "GET",
      "Content-Type": "application/json",
      // Assuming you have a function to get the token
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return await res.json();
};
