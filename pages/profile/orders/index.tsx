import { UserOrders } from "@/components/profile/userOrders";

export default function OrdersPage() {
  return (
    <div className="flex flex-col bg-white px-5 py-4 h-[100%] gap-6 md:w-[400px] rounded-sm">
      <div className="font-bold text-4xl py-3">Orders</div>
      <UserOrders />
    </div>
  );
}
