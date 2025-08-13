import { getOrders } from "@/lib/api";
import { saveOrders } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function UserOrders() {
  const router = useRouter();
  const orders = getOrders();
  const [userOrders, setUserOrders] = useState("");
  useEffect(() => {
    orders.then((e) => {
      setUserOrders(e);
      saveOrders(e);
    });
  }, []);

  function UserOrdersComp(props: any) {
    let array = [];
    array = props.orders;
    console.log(array);
    return (
      <div className="flex flex-col text-[25px] gap-6">
        {array ? (
          array.map((e: any) => {
            return (
              <button
                key={e.orderId}
                className="pl-2 bg-red-100 hover:bg-red-400 rounded-lg border-solid border-black border-[5px]"
                onClick={() => {
                  router.push("profile/orders/" + e.orderId);
                }}
              >
                <div className="font-bold ">{e.additionalInfo.title}</div>
                <h3 id={e.orderId} className="text-3xl">
                  Status:{" " + e.status}
                </h3>
              </button>
            );
          })
        ) : (
          <div>No Orders Created Yet</div>
        )}
      </div>
    );
  }

  // const orderHandler = async (e: any) => {
  //   e.preventDefault();
  //   const t = e.target as HTMLElement;
  //   console.log(t);
  //   console.log(t.id);

  // };
  return (
    <div className="flex flex-col justify-between h-[100%] gap-6">
      <UserOrdersComp orders={userOrders} />
    </div>
  );
}
