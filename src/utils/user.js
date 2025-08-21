import { request } from "./fetch";

export function getMe() {
  return request("/users/me");
}

export function updateName(id, name) {
  return request(`/users/${id}/name`, {
    method: "PATCH",
    body: JSON.stringify({ name }),
  });
}

export function updateEmail(id, email) {
  return request(`/users/${id}/email`, {
    method: "PATCH",
    body: JSON.stringify({ email }),
  });
}

export function updateGender(id, gender) {
  return request(`/users/${id}/gender`, {
    method: "PATCH",
    body: JSON.stringify({ gender }),
  });
}

export function updatePhone(id, phone) {
  return request(`/users/${id}/phone`, {
    method: "PATCH",
    body: JSON.stringify({ phone }),
  });
}

export function updatePassword(id, password) {
  return request(`/users/${id}/password`, {
    method: "PATCH",
    body: JSON.stringify({ password }),
  });
}

export function completeOnboarding(id) {
  return request(`/users/${id}/onboarding`, { method: "POST" });
}
