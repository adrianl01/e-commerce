export function saveToken(token: string) {
  localStorage.setItem("token", token);
}

export function retrieveToken() {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("email");
}

export function saveEmail(email: string) {
  localStorage.setItem("email", email);
}

export function getEmail() {
  return localStorage.getItem("email");
}

export function saveUserData(data: unknown) {
  localStorage.setItem(
    "user",
    JSON.stringify(data)
  );
}

export function getUserData() {
  if (typeof window === "undefined")
    return null;

  const raw =
    localStorage.getItem("user");

  if (!raw) return null;

  return JSON.parse(raw);
}