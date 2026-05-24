import { retrieveToken } from "./storage";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = retrieveToken();

  const headers = new Headers(
    options.headers
  );

  headers.set(
    "Content-Type",
    "application/json"
  );

  if (token) {
    headers.set(
      "Authorization",
      `Bearer ${token}`
    );
  }

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,
      headers,
    }
  );

  if (!response.ok) {
    const error =
      await response.json().catch(() => null);

    throw {
      status: response.status,
      message:
        error?.message ||
        "Request failed",
    };
  }

  return response.json();
}
// export async function generateOrder(
//   address: string,
//   products: shoppingCartItem[]
// ) {
//   console.log(address);

//   return await fetchAPI(`/order`, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       envio: address,
//       products,
//     }),
//   });
// }

// export async function SearchProducts() {
//     return await fetchAPI(`/products/`, {
//         mode: "cors",
//         headers: {
//             "Content-type": "application/json",
//         },
//     });
// }
// export async function sync() {
//   return await fetchAPI(`/sync`, {
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
// }

// export async function getProductByID(productId: string) {
//   return await fetchAPI("/products/" + productId, {
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
// }

// export async function getFavourites() {
//   return await fetchAPI("/me/favourites", {
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
// }

// export async function setNewFavourite(product: favouriteItems) {
//   return await fetchAPI("/me/favourites", {
//     method: "PATCH",
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       product,
//     }),
//   });
// }

// export async function deleteFavourite(itemId: string) {
//   return await fetchAPI("/me/favourites?productId=" + itemId, {
//     method: "DELETE",
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
// }

// export async function getShoppingCart() {
//   return await fetchAPI("/me/shopping-cart", {
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
// }
// export async function addProductToCart(product: shoppingCartItem) {
//   return await fetchAPI("/me/shopping-cart", {
//     method: "PATCH",
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       product,
//     }),
//   });
// }
// export async function deleteItemFromCart(itemId: string) {
//   return await fetchAPI("/me/shopping-cart?productId=" + itemId, {
//     method: "DELETE",
//     mode: "cors",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
// }

// export async function getProductsByGenre(genre: Genre, offset = 20) {
//   return await fetchAPI(
//     "/products/genre?genre=" + genre + "&offset=" + offset,
//     {
//       mode: "cors",
//       headers: {
//         "Content-type": "application/json",
//       },
//     }
//   );
// }
