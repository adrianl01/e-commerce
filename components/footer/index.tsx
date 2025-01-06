import { FooterButton } from "@/ui/buttons";
import { InstaLogo, XLogo } from "@/imgs";
import Link from "next/link";

export function Footer() {
  const handlerLogOut = (e: any) => {
    e.preventDefault();
    console.log("botón Log Out");
  };
  const handlerInsta = (e: any) => {
    e.preventDefault();
    console.log("botón Insta");
  };
  const handlerX = (e: any) => {
    e.preventDefault();
    console.log("botón X");
  };
  return (
    <div className="bg-black flex flex-col items-start justify-between pt-[50px] py-[19px] px-[22px] text-white h-[648px] text-[25px]">
      <div className="flex flex-col gap-4">
        <div className="pb-3">
          {" "}
          <Link href={"/signin"}>
            {" "}
            <FooterButton>Ingresar</FooterButton>
          </Link>
        </div>
        <div className="pb-3">
          {" "}
          <Link href={"/profile"}>
            {" "}
            <FooterButton>Mi Perfil</FooterButton>
          </Link>
        </div>
        <div className="pb-3">
          {" "}
          <Link href={"/search"}>
            <FooterButton>Buscar</FooterButton>
          </Link>
        </div>
        <div className="pb-3">
          {" "}
          <FooterButton handler={handlerLogOut}>Log Out</FooterButton>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[100%]">
        <div className="text-4xl">Redes</div>
        <div className="pb-3 w-[100%]">
          {" "}
          <FooterButton handler={handlerInsta}>
            <InstaLogo />
            E-Commerce
          </FooterButton>
        </div>
        <div className="pb-3 w-[100%]">
          {" "}
          <FooterButton handler={handlerX}>
            <XLogo />
            E-Commerce
          </FooterButton>
        </div>
      </div>
      <div className="pb-3 text-2xl font-normal"> ©2024 apx</div>
    </div>
  );
}
