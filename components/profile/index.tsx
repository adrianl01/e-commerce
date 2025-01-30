import { getUser, updateAddress, updateUser } from "@/lib/api";
import Form from "next/form";
import { userData } from "@/lib/api";
import { useEffect, useState } from "react";
import Link from "next/link";
type userInfo = {
  additionalUserData: {
    firstName: string;
    lastName: string;
    userAge: number;
    phoneNumber: number;
  };
  address: string;
};
export function Profile() {
  const getUsr = getUser();
  const [data, userData] = useState("");
  useEffect(() => {
    const loadGetUser = async () => {
      try {
        const res = await getUsr;
        console.log(res);
        userData(res);
      } catch (error) {
        console.error(error);
      }
    };
    loadGetUser();
  }, []);

  const [edit, setEdit] = useState(false);
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
  function UserInfo(props: any) {
    const userInfo = props.user as userInfo;
    return (
      <div className="flex flex-col justify-between h-[100%] gap-6">
        <div className="flex flex-col text-[25px] gap-6">
          <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
            <div className="font-bold ">Name/s:</div>
            <h3 className="text-3xl">
              {userInfo.additionalUserData?.firstName}
            </h3>
          </div>
          <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
            <div className="font-bold "> Last Name/s:</div>
            <h3 className="text-3xl">
              {userInfo.additionalUserData?.lastName}
            </h3>
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
            console.log(edit);
            setEdit(true);
            console.log(edit);
          }}
        >
          Update Info
        </button>
      </div>
    );
  }
  return (
    <div className="flex w-[100%] md:justify-center">
      <div className="flex flex-col bg-white px-5 py-4 h-[100%] gap-6 md:w-[400px]">
        <div className="font-bold text-4xl py-3">Profile</div>
        {edit ? (
          <Form
            className="flex flex-col h-full gap-8 text-2xl"
            onSubmit={formHandler}
            action={""}
          >
            <fieldset className=" px-0 py-0 mx-0">
              <label className="text-2xl" htmlFor="firstName">
                Nombre/s
              </label>
              <input
                className="h-16 w-full border-solid border-black border-4 rounded-lg"
                type="text"
                name="firstName"
              />
            </fieldset>
            <fieldset className=" px-0 py-0 mx-0">
              <label className="text-2xl" htmlFor="lastName">
                Apellido/s
              </label>
              <input
                className="h-16 w-full border-solid border-black border-4 rounded-lg"
                type="text"
                name="lastName"
              />
            </fieldset>
            <fieldset className=" px-0 py-0 mx-0">
              <label className="text-2xl" htmlFor="userAge">
                Edad
              </label>
              <input
                className="h-16 w-full border-solid border-black border-4 rounded-lg"
                type="number"
                name="userAge"
              />
            </fieldset>
            <fieldset className=" px-0 py-0 mx-0">
              <label className="text-2xl" htmlFor="address">
                Dirección
              </label>
              <input
                className="h-16 w-full border-solid border-black border-4 rounded-lg"
                type="text"
                name="address"
              />
            </fieldset>
            <fieldset className=" px-0 py-0 mx-0">
              <label className="text-2xl" htmlFor="tel">
                Teléfono{" "}
              </label>
              <input
                type="tel"
                className="h-16 w-full border-solid border-black border-4 rounded-lg"
                name="tel"
              />
            </fieldset>
            <button
              className="text-3xl font-bold h-14 w-full bg-[#d14e6d] rounded-lg"
              type="submit"
            >
              Guardar
            </button>
          </Form>
        ) : (
          <UserInfo user={data} />
        )}
        <Link href={"/"}>
          <div className=" flex py-4 pl-2 text-3xl bg-red-500 justify-center rounded-lg border-solid border-black border-[5px]">
            Cancel
          </div>
        </Link>
      </div>
    </div>
  );
}
