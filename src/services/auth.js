// src/services/auth.js
export const loginUser = async (data) => {
  const res = await fetch("http://localhost:8083/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res;
};

export const registerUser = async (data) => {
  const res = await fetch("http://localhost:8083/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text(); // assuming plain text response like "User registered successfully!"
};
