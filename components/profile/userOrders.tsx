"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchOrders } from "@/redux/slices/profileSlice";

export function UserOrders() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { orders, ordersStatus } = useAppSelector((s) => s.profile);

  useEffect(() => {
    if (ordersStatus === "idle") {
      dispatch(fetchOrders());
    }
  }, [ordersStatus, dispatch]);

  if (ordersStatus === "loading") return <div>Loading orders...</div>;

  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <div className="flex flex-col text-[25px] gap-6">
        {orders.length > 0 ? (
          orders.map((e: any) => (
            <button
              key={e.orderId}
              className="pl-2 bg-red-100 hover:bg-red-400 rounded-lg border-solid border-black border-[5px]"
              onClick={() => router.push(`profile/orders/${e.orderId}`)}
            >
              <div className="font-bold">{e.additionalInfo.title}</div>
              <h3 className="text-3xl">Status: {e.status}</h3>
            </button>
          ))
        ) : (
          <div>No Orders Created Yet</div>
        )}
      </div>
    </div>
  );
}