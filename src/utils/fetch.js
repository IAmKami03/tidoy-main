const API_URL = import.meta.env.VITE_API_URL;

export async function request(path, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    let errorText;
    try {
      const errData = await res.json();
      errorText = errData.message || JSON.stringify(errData);
    } catch {
      errorText = res.statusText;
    }
    throw new Error(errorText);
  }

  return res.json();
}
