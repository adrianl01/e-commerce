"use client";
import { useAppSelector } from "@/redux/store";

export function OrderInfo({ orderInfo }: { orderInfo: string }) {
  const { orders } = useAppSelector((s) => s.profile);
  const order = orders.find((o: any) => o.orderId === orderInfo);

  if (!order) return <></>;

  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
        <div className="font-bold">{order.additionalInfo?.title}</div>
        <h3 className="text-3xl">Status: {order.status}</h3>
      </div>
    </div>
  );
}