import { userInfo } from ".";

export function UserInfo(props: any) {
  console.log(props);
  const userInfo = props.user as userInfo;
  const setEdit = props.setter;
  return (
    <div className="flex flex-col justify-between h-[100%] gap-6">
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
