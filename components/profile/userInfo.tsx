import { getUser } from "@/lib/api";
import { userInfo } from ".";
import { useEffect, useState } from "react";
import { retrieveToken } from "@/lib";

export function UserInfo(props: any) {
  console.log("UserInfo");
  const getUsr = getUser();
  const token = retrieveToken();
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const loadGetUser = async () => {
      try {
        const res = await getUsr;
        setUserData(res);
      } catch (error) {
        console.error(error);
      }
    };
    if (token) {
      loadGetUser();
    }
  }, []);
  const setEdit = props.setter;
  function UserInfoComp(props: any) {
    const userInfo = props.user as userInfo;
    return (
      <div className="flex flex-col text-[25px] gap-6">
        <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
          <div className="font-bold ">Name/s:</div>
          <h3 className="text-3xl">{userInfo.additionalUserData?.firstName}</h3>
        </div>
        <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
          <div className="font-bold "> Last Name/s:</div>
          <h3 className="text-3xl">{userInfo.additionalUserData?.lastName}</h3>
        </div>
        <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
          <div className="font-bold "> Age:</div>
          <h3 className="text-3xl">{userInfo.additionalUserData?.userAge}</h3>
        </div>
        <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
          <div className="font-bold "> Phone Number:</div>
          <h3 className="text-3xl">
            {userInfo.additionalUserData?.phoneNumber}
          </h3>
        </div>
        <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
          <div className="font-bold "> Address:</div>
          <h3 className="text-3xl">{userInfo.address}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-[100%] gap-6">
      <UserInfoComp user={userData} />
      <button
        className="py-4 pl-2 text-3xl bg-red-500 rounded-lg border-solid border-black border-[5px] "
        onClick={() => {
          setEdit(true);
        }}
      >
        Update Info
      </button>
    </div>
  );
}
