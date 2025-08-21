import { request } from "./fetch";

export async function register({ name, email, password, gender, phone }) {
  return request("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password, gender, phone }),
  });
}

export async function login(email, password) {
  const data = await request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
