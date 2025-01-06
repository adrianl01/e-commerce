import { BurgerButton } from "@/ui/buttons";
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
    <div className="bg-black flex justify-between py-5 px-[22px] ">
      <Link href={"/"}>
        <BuyItLogo />
      </Link>
      <BurgerButton handler={handlerOpenMenu} />
      <div className="divMenu" id="menu">
        <Menu />
      </div>
    </div>
  );
}
