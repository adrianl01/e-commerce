import { BurgerButton } from "@/ui/buttons";
import { HeaderDiv } from "./style";
import { Menu } from "./menu";
import { BuyItLogo } from "@/imgs";
import Link from "next/link";

export function Header() {
  const handlerOpenMenu = (e: any) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu!.style.display = "flex";
  };

  return (
    <HeaderDiv>
      <Link href={"/"}>
        <BuyItLogo />
      </Link>
      <BurgerButton handler={handlerOpenMenu} />
      <div className="divMenu" id="menu">
        <Menu />
      </div>
    </HeaderDiv>
  );
}
