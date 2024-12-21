import { FooterButton } from "@/ui/buttons";
import { FooterDiv, FooterButtonDiv, FooterBoxDiv } from "./style";
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
    <FooterDiv>
      <FooterBoxDiv>
        <FooterButtonDiv>
          {" "}
          <Link href={"/signin"}>
            {" "}
            <FooterButton>Ingresar</FooterButton>
          </Link>
        </FooterButtonDiv>
        <FooterButtonDiv>
          {" "}
          <Link href={"/profile"}>
            {" "}
            <FooterButton>Mi Perfil</FooterButton>
          </Link>
        </FooterButtonDiv>
        <FooterButtonDiv>
          {" "}
          <Link href={"/search"}>
            <FooterButton>Buscar</FooterButton>
          </Link>
        </FooterButtonDiv>
        <FooterButtonDiv>
          {" "}
          <FooterButton handler={handlerLogOut}>Log Out</FooterButton>
        </FooterButtonDiv>
      </FooterBoxDiv>
      <FooterBoxDiv>
        <div className="text-4xl">Redes</div>
        <FooterButtonDiv>
          {" "}
          <FooterButton handler={handlerInsta}>
            <InstaLogo />
            E-Commerce
          </FooterButton>
        </FooterButtonDiv>
        <FooterButtonDiv>
          {" "}
          <FooterButton handler={handlerX}>
            <XLogo />
            E-Commerce
          </FooterButton>
        </FooterButtonDiv>
      </FooterBoxDiv>
      <FooterButtonDiv style={{ fontSize: "25px", fontWeight: 400 }}>
        {" "}
        ©2024 apx
      </FooterButtonDiv>
    </FooterDiv>
  );
}
