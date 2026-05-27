import { fetchAPI } from "../api";

export async function searchProducts(  query: string,  offset: string, limit: number) {
  const search =
    query === "random"
      ? ""
      : query;

  return fetchAPI(
    `search?search=${search}&limit=${limit.toString()}&offset=${offset}`
  );
}

export async function getProductById(
  id: string
) {
  return fetchAPI(`products/${id}`);
}