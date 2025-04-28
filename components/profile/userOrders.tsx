import { getOrders } from "@/lib/api";
import { saveOrders, useGetUserOrders } from "@/lib/hooks";
import { useEffect, useState } from "react";

export function UserOrders(props: any) {
  const orders = getOrders();
  const [userOrders, setUserOrders] = useState("");
  useEffect(() => {
    orders.then((e) => {
      setUserOrders(e);
      saveOrders(e);
    });
  }, []);

  const setOrder = props.setter;
  const setOrderId = props.orderId;

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
                onClick={orderHandler}
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

  const orderHandler = (e: any) => {
    e.preventDefault();
    const t = e.target as HTMLElement;
    console.log(t.id);
    setOrderId(t.id);
    // setOrder(true);
  };
  return (
    <div className="flex flex-col justify-between h-[100%] gap-6">
      <UserOrdersComp orders={userOrders} />
    </div>
  );
}
