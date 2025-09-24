import { useState } from "react";
import { BurgerButton } from "@/ui/buttons";
import { Menu } from "./comps/menu";
import { BuyItLogo } from "@/imgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEmail } from "@/lib/hooks";
import { HeaderButton } from "./comps/buttons";
import { SearchHeaderForm } from "./comps/form";
import { OptionsComp } from "./comps/menu/details";

export function Header() {
  const path = usePathname();
  const email = useEmail();
  let isSearch = false;
  const strgparam = JSON.stringify(path);
  if (strgparam) {
    let p = strgparam.split("/")[1];
    if (p) {
      p.slice(0, 6);
    }
    if (p === "item") {
      isSearch = true;
    } else if (p === "search") {
      isSearch = true;
    } else {
      isSearch = false;
    }
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const handlerOpenMenu = (e: any) => {
    e.preventDefault();
    setMenuOpen(true);
  };

  return (
    <div className="bg-black md:pb-5 flex justify-between gap-3 py-5 px-5 items-center">
      <Link href={"/"}>
        <BuyItLogo />
      </Link>
      <SearchHeaderForm conditional={isSearch} />
      {email ? (
        <div className="hidden gap-2 items-center md:[display:flex!important]">
          <OptionsComp />
        </div>
      ) : (
        <HeaderButton text="Login" link="/login" />
      )}
      <BurgerButton classButton={"block md:hidden"} handler={handlerOpenMenu} />
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <Menu closeMenu={setMenuOpen} />
        </div>
      )}
    </div>
  );
}
