import { CloseMenuButton, MenuButton } from "@/ui/buttons";
import { MenuDiv, MenuLogInButton } from "./style";
import { CloseLogo } from "@/imgs";
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
    return <div>{props.emailProp}</div>;
  }

  return (
    <MenuDiv>
      <CloseMenuButton handler={closeMenuHandler} />
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
      <MenuLogInButton
        onClick={() => {
          console.log("logOut");
          logout();
        }}
      >
        Cerrar Sesión
      </MenuLogInButton>
    </MenuDiv>
  );
}
