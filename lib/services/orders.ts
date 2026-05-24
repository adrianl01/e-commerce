import { fetchAPI } from "../api";

export async function buyProduct(
  productId: string
) {
  return fetchAPI("order", {
    method: "POST",
    body: JSON.stringify({
      productId,
    }),
  });
}

export async function getOrders() {
  return fetchAPI("me/orders");
}