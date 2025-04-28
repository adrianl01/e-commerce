import { updateAddress, updateUser } from "@/lib/api";
import { userData } from "@/lib/api";
import { useState } from "react";
import { UserInfo } from "./userInfo";
import { useRouter } from "next/navigation";
import { UserOrders } from "./userOrders";
import { getOrder } from "@/lib/hooks";
import { OrderInfo } from "./orderInfo";
import { EditForm } from "./editUserForm";
export type userInfo = {
  additionalUserData: {
    firstName: string;
    lastName: string;
    userAge: number;
    phoneNumber: number;
  };
  address: string;
};
export function Profile() {
  const r = useRouter();
  const [orderId, setOrderId] = useState("");
  const [orderInfo, setOrderInfo] = useState("");

  const [edit, setEdit] = useState(false);
  const [order, setOrder] = useState(false);
  const formHandler = (e: any) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const address = e.target.address.value;
    const userAge = e.target.userAge.value;
    const phoneNumber = e.target.tel.value;
    const additionalUserData = {
      firstName,
      lastName,
      userAge,
      phoneNumber,
    };
    updateUser(additionalUserData as userData);
    updateAddress(address);
    setEdit(false);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    if (edit) {
      setEdit(false);
    } else {
      r.push("/");
    }
  };

  return (
    <div className="flex w-[100%] flex-col md:flex-row md:justify-center">
      <div className="flex flex-col bg-white px-5 py-4 h-[100%] gap-6 md:w-[400px]">
        <div className="font-bold text-4xl py-3">Profile</div>
        {edit ? (
          <EditForm handler={formHandler} />
        ) : (
          <UserInfo setter={setEdit} />
        )}
        <div
          className=" flex py-4 pl-2 text-3xl bg-red-500 justify-center rounded-lg border-solid border-black border-[5px]"
          onClick={handleCancel}
        >
          Cancel
        </div>
      </div>
      <div className="flex flex-col bg-white px-5 py-4 h-[100%] gap-6 md:w-[400px] rounded-sm">
        <div className="font-bold text-4xl py-3">Orders</div>
        {order ? (
          <OrderInfo orderInfo={orderId} />
        ) : (
          <UserOrders setter={setOrder} orderId={setOrderId} />
        )}
      </div>
    </div>
  );
}
