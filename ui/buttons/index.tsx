import { BurguerLogo, CloseLogo } from "@/imgs";
function BaseHeaderButton(props: any) {
  return (
    <button
      className={`bg-black border-none ${props.className ?? ""}`}
      onClick={props.onClick}
      type={props.type ?? "button"}
    >
      {props.children}
    </button>
  );
}
export function BurgerButton(prop: any) {
  return (
    <BaseHeaderButton className={prop.classButton} onClick={prop.handler}>
      <BurguerLogo />
    </BaseHeaderButton>
  );
}

function BaseFooterButton(props: any) {
  return (
    <button
      className="font-inter
  text-white
  text-[25px]
  font-normal
  leading-[19.36px]
  text-left
  [text-decoration-skip-ink:none]
  bg-black
  border-none
  flex
  items-center
  gap-[10px]"
      onClick={props.onClick}
      type={props.type ?? "button"}
    >
      {props.children}
    </button>
  );
}

export function FooterButton(prop: any) {
  return (
    <BaseFooterButton className="flex items-center" onClick={prop.handler}>
      {prop.children}
    </BaseFooterButton>
  );
}

export function MenuButton(prop: any) {
  return (
    <button
      className="font-[Inter] font-bold text-center border-none pb-14"
      onClick={prop.handler}
    >
      {prop.children}
    </button>
  );
}

export function CloseMenuButton(prop: any) {
  return (
    <button onClick={prop.handler}>
      <div>
        <CloseLogo />
      </div>
    </button>
  );
}

export function SearchButton(prop: any) {
  return (
    <button className={prop.class} type="submit" onClick={prop.handler}>
      {prop.children}
    </button>
  );
}

export function SearchButton2(props: any) {
  return (
    <button
      className="bg-red-400 text-black w-full md:w-1/2 text-[25px] rounded-lg border-none h-[37px] hover:bg-red-500 duration-200"
      type="submit"
      onClick={props.handler}
    >
      {props.children}
    </button>
  );
}

type AnimatedButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  buttonText?: string;
};
export function AnimatedButton({
  type,
  className,
  buttonText,
}: AnimatedButtonProps) {
  return (
    <button
      className={
        "w-full py-2 px-4 rounded-xl bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-200 text-black font-bold shadow-lg transition duration-200 hover:scale-105 hover:from-pink-500 hover:to-yellow-300 focus:outline-none focus:ring-2 focus:ring-pink-300" +
        (className ? ` ${className}` : "")
      }
      type={type ?? "submit"}
    >
      {buttonText}
    </button>
  );
}
