import { CloseMenuButton, MenuButton } from "@/ui/buttons";
import Link from "next/link";

import { useEmail } from "@/lib/hooks";
import { logout } from "@/lib";

export function Menu() {
  const closeMenuHandler = (e: any) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu!.style.display = "none";
  };
  const email = useEmail();

  console.log("emailMenu:", email);
  function ShowEmail(props: any) {
    return <div className="text-[23px]">{props.emailProp}</div>;
  }

  return (
    <div className="bg-black flex flex-col justify-between text-[42px] text-center text-white p-[15px] h-[100%] w-[100%] m-0">
      <div className="flex justify-end">
        <CloseMenuButton handler={closeMenuHandler} />
      </div>
      <div className="MenuButtonBox">
        <Link href={"/signin"}>
          <MenuButton>Ingresar</MenuButton>
        </Link>
        <Link href={"/profile"}>
          <MenuButton>Mi Perfil</MenuButton>
        </Link>
        <Link href={"/search"}>
          <MenuButton>Buscar</MenuButton>
        </Link>
      </div>
      <ShowEmail emailProp={email} />

      {email ? (
        <button
          className="bg-black border-none text-[20px] font-normal text-center text-red-600"
          onClick={() => {
            console.log("logOut");
            logout();
          }}
        >
          Cerrar Sesión
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
