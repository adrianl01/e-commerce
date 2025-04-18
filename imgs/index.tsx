import Image from "next/image";
import buyIt from "./buy-it.png";
import burguer from "./burguer.png";
import close from "./close.png";
import insta from "./insta.png";
import x from "./x.png";

export function BuyItLogo() {
  return <Image alt="compralo" src={buyIt} width={150} />;
}
export function BurguerLogo() {
  return <Image alt="burguer" src={burguer} />;
}
export function CloseLogo() {
  return <Image alt="close" src={close} width={40} height={40} />;
}
export function InstaLogo() {
  return <Image alt="insta" src={insta} />;
}
export function XLogo() {
  return <Image alt="x" src={x} />;
}
