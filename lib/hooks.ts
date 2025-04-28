import useSWR from "swr";
import useSWRImmutable from "swr";
import { fetchAPI, useBuyProduct } from "./api";

export async function useMe() {
    const { data, error } = useSWR("me", fetchAPI as any);
    const res = await data ? data : null;
    return res;
}

export async function useProducts(
    query: string | undefined,
    offset: string,
) {
    if (query === "") {
        return console.error({ message: "query vacío" })
    } else if (query === "random") {
        const { data, error } = useSWRImmutable(
            `search?search=${""}&limit=3&offset=${offset}`,
            fetchAPI as any
        );
        const res = data ? data : null;
        return res;
    } else {
        const { data, error } = useSWRImmutable(
            `search?search=${query}&limit=3&offset=${offset}`,
            fetchAPI as any
        );
        const res = data ? data : null;
        return res;
    }
}

export function useProduct(productId: string) {
    const { data, error } = useSWRImmutable(
        "products/" + productId,
        fetchAPI as any
    );
    const res = data ? data : null;
    return res;
}
export function useEmail() {
    const { data, error } = useSWR("email",
        () => {
            return localStorage.getItem("email")
        }
    );
    const res = data ? data : null;
    return res;
}

export async function useBuyProductFunc(id: string) {
    return await useBuyProduct(id)
}

export function useGetUserOrders() {
    const { data, error } = useSWRImmutable('me/orders', fetchAPI as any)
    return data
}

export function saveOrders(orders: []) {
    const parsed = JSON.stringify(orders);
    return localStorage.setItem("userOrders", parsed);
}

export async function getOrder(orderId: string) {
    const orders = localStorage.getItem("userOrders") as string
    const parsedOrders = JSON.parse(orders)
    var result = parsedOrders.filter(function (order: any) {
        return order.orderId == orderId
    })
    return await result
}
