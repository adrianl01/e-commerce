// import useSWR from "swr";
// import useSWRImmutable from "swr/immutable";
// import { fetchAPI, useBuyProduct } from "./api";

// // ✅ hook sincrónico, sin async
// export function useMe() {
//   const { data, error, isLoading } = useSWR("me", fetchAPI as any);
//   return { data: data ?? null, error, isLoading };
// }

// interface UseProductsParams {
//   query?: string;
//   offset: string;
//   limit?: number;
// }
// // ✅ hook sincrónico, sin condicionales — la key cambia, no el hook

// export function useProducts( { query, offset, limit }: UseProductsParams) {
//   const key =
//     !query || query === ""
//       ? null // SWR no fetcha si la key es null
//       : `search?search=${query === "random" ? "" : query}&limit=${limit ? limit : 3}&offset=${offset}`;

//   const { data, error, isLoading } = useSWRImmutable(key, fetchAPI as any);  

//   return { data: data ?? null, error, isLoading };
// } 

// // ✅ sin cambios estructurales, solo limpieza
// export function useProduct(productId: string) {
//   const { data, error, isLoading } = useSWRImmutable(
//     productId ? `products/${productId}` : null,
//     fetchAPI as any
//   );
//   return { data: data ?? null, error, isLoading };
// }

// // ✅ localStorage no es async — no necesita useSWR
// export function useEmail() {
//   if (typeof window === "undefined") return null;
//   return localStorage.getItem("email");
// }

// // ✅ useBuyProduct probablemente ya es un hook o función async — verificá
// export function useBuyProductFunc(id: string) {
//   return useBuyProduct(id);
// }

// export function useGetUserOrders() {
//   const { data, error, isLoading } = useSWRImmutable("me/orders", fetchAPI as any);
//   return { data: data ?? null, error, isLoading };
// }

// // estas dos no usan hooks, están bien — solo saco los await innecesarios
// export function saveOrders(orders: []) {
//   localStorage.setItem("userOrders", JSON.stringify(orders));
// }

// export function getOrder(orderId: string) {
//   const orders = localStorage.getItem("userOrders");
//   if (!orders) return null;
//   const parsed = JSON.parse(orders);
//   return parsed.find((order: any) => order.orderId === orderId) ?? null;
// }