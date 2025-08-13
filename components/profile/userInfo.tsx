import { getUser } from "@/lib/api";
import { userInfo } from ".";
import { Fragment, useEffect, useState } from "react";
import { retrieveToken } from "@/lib";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "@/ui/spinner";

export function UserInfo(props: any) {
  console.log("UserInfo");
  const getUsr = getUser();
  const token = retrieveToken();
  const [userData, setUserData] = useState(null);
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
    console.log(window.innerWidth);
    const labels = [
      {
        label: "Name/s:",
        value: userInfo.additionalUserData?.firstName,
        key: "firstName",
      },
      {
        label: "Last Name/s:",
        value: userInfo.additionalUserData?.lastName,
        key: "lastName",
      },
      {
        label: "Age:",
        value: userInfo.additionalUserData?.userAge,
        key: "userAge",
      },
      {
        label: "Phone Number:",
        value: userInfo.additionalUserData?.phoneNumber,
        key: "phoneNumber",
      },
      { label: "Address:", value: userInfo.address, key: "address" },
    ];
    return (
      <div className="flex flex-col text-[25px] gap-6">
        {labels.map((l) => {
          return (
            <AnimatePresence mode="wait" key={l.key}>
              <motion.div
                key={l.key}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="pl-2 bg-red-100 rounded-lg border-solid border-black border-[5px]">
                  <div className="font-bold ">{l.label}</div>
                  <h3 className="text-3xl">{l.value}</h3>
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    );
  }

  return (
    <Fragment>
      {userData ? (
        <div className="flex flex-col justify-between gap-6">
          <button
            className="py-4 pl-2 text-3xl bg-red-500 rounded-lg border-solid border-black border-[5px] "
            onClick={() => {
              setEdit(true);
            }}
          >
            Update Info
          </button>
          <UserInfoComp user={userData} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-128px)]">
          <LoadingSpinner />
        </div>
      )}
    </Fragment>
  );
}
