import { CloseMenuButton, MenuButton } from "@/ui/buttons";
import Link from "next/link";
import { useEmail } from "@/lib/hooks";
import { logout, retrieveToken } from "@/lib";
import { useRouter } from "next/navigation";

export function Menu() {
  const router = useRouter();
  const closeMenuHandler = (e: any) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu!.style.display = "none";
  };
  const token = retrieveToken();

  function ShowEmail(props: any) {
    return <div className="text-[23px]">{props.emailProp}</div>;
  }

  return (
    <div className="bg-black flex flex-col justify-between text-[42px] text-center text-white p-[15px] h-[100%] w-[100%] m-0">
      <div className="flex justify-end">
        <CloseMenuButton handler={closeMenuHandler} />
      </div>
      <div className="MenuButtonBox">
        {token ? (
          <></>
        ) : (
          <Link href={"/signin"}>
            <MenuButton>Log In</MenuButton>
          </Link>
        )}
        {token ? (
          <Link href={"/profile"}>
            <MenuButton>My Profile</MenuButton>
          </Link>
        ) : (
          <></>
        )}
        <Link href={"/search"}>
          <MenuButton>Search</MenuButton>
        </Link>
      </div>
      <ShowEmail emailProp={token} />

      {token ? (
        <button
          className="bg-black border-none text-[20px] font-normal text-center text-red-600"
          onClick={() => {
            logout();
            router.replace("/");
          }}
        >
          Log Out
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
