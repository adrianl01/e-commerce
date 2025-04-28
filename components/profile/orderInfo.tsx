import { getOrder } from "@/lib/hooks";
import { useEffect, useState } from "react";

export function OrderInfo(props: any) {
  const orderId = props.orderInfo;
  console.log(orderId);
  const orderInfo = getOrder(orderId);

  const [userOrders, setUserOrders] = useState("");
  useEffect(() => {
    orderInfo.then((e) => setUserOrders(e));
  }, []);

  function OrderInfoComp(props: any) {
    console.log(props);
    let userOrders = [];
    userOrders = props.order;
    console.log(userOrders);
    if (userOrders.length === 0) {
      return <></>;
    } else {
      return (
        <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
          <div className="font-bold ">{userOrders}</div>
          <h3 className="text-3xl">{userOrders}</h3>
        </div>
      );
    }
  }
  return (
    <div className="flex flex-col justify-between h-[100%] gap-6">
      <OrderInfoComp order={userOrders} />
    </div>
  );
}
