import { FooterButton } from "@/ui/buttons";
import { InstaLogo, XLogo } from "@/imgs";
import Link from "next/link";
import { useEmail } from "@/lib/hooks";

export function Footer() {
  const handlerLogOut = (e: any) => {
    e.preventDefault();
  };
  const handlerInsta = (e: any) => {
    e.preventDefault();
  };
  const handlerX = (e: any) => {
    e.preventDefault();
  };
  const email = useEmail();
  return (
    <div className="bg-black flex flex-col items-start justify-between pt-[50px] py-[19px] px-[22px] text-white h-[648px] text-[25px] md:h-[400px]">
      <div className="flex flex-col gap-24 h-[400px] md:flex-row md:justify-between md:w-[100%]">
        <div className="w-[350px] flex flex-col gap-4">
          <div className="pb-3">
            {" "}
            <Link href={"/signin"}>
              {" "}
              <FooterButton>Log In</FooterButton>
            </Link>
          </div>
          {email ? (
            <div className="pb-3">
              {" "}
              <Link href={"/profile"}>
                {" "}
                <FooterButton>My Profile</FooterButton>
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          <div className="pb-3">
            {" "}
            <Link href={"/search"}>
              <FooterButton>Search</FooterButton>
            </Link>
          </div>
          <div className="pb-3">
            {" "}
            <FooterButton handler={handlerLogOut}>Log Out</FooterButton>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-4xl">Our Socials</div>
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
      </div>
      <div className="pb-3 text-2xl font-normal"> ©2024 apx</div>
    </div>
  );
}
