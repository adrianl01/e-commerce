import { fetchAPI } from './api';
export interface userData {
  firstName: string;
  lastName: string;
  userAge: number;
  phoneNumber: number;
  address: string;
}
// export function saveToken(token: string) {
//   if (token) localStorage.setItem('token', JSON.stringify(token));
// }

// export function retrieveToken() {
//   if (typeof window !== 'undefined') {
//     const token = localStorage.getItem('token') || '';
//     if (!token) return;
//     return JSON.parse(token);
//   }
// }

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('email');
  return { message: 'Logged Out' };
}

export function saveEmail(email: string) {
  localStorage.setItem('email', email);
}

export function getEmail() {
  const email = localStorage.getItem('email');
  return email;
}

export function saveUserDataOnLS(data: userData) {
  localStorage.setItem('user', JSON.stringify(data));
}

export function getUserDataFromLS() {
  if (typeof window !== undefined) {
    const userDataLS = localStorage.getItem('user') || '';
    if (!userDataLS) return;
    return JSON.parse(userDataLS);
  }
}

// export function isUserLogged() {
//   const token = retrieveToken();
//   return !(token == null);
// }
export function getUsername() {
  return getUserDataFromLS()?.username;
}
export function getUserAddress() {
  return getUserDataFromLS()?.address;
}

export async function searchProducts(q: string, offset: string) {
  if (!q || q === '') throw new Error('query vacío');
  const search = q === 'random' ? '' : q;
  const data = await fetchAPI(`search?search=${search}&limit=3&offset=${offset}`, {
    method: 'GET',
    mode: 'cors'
  });
  return data;
}

export async function getProductById(id: string) {
  if (!id) throw new Error('id vacío');
  const data = await fetchAPI(`products/${id}`, {
    method: 'GET',
    mode: 'cors'
  });
  return data;
}
