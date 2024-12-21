import { CloseMenuButton, MenuButton } from "@/ui/buttons";
import { MenuDiv, MenuLogInButton } from "./style";
import { CloseLogo } from "@/imgs";
import Link from "next/link";

export function Menu() {
  const closeMenuHandler = (e: any) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu!.style.display = "none";
  };

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
      test@gmail.com
      <MenuLogInButton>Cerrar Sesión</MenuLogInButton>
    </MenuDiv>
  );
}
