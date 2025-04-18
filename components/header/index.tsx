import { BurgerButton, SearchButton2 } from "@/ui/buttons";
import { Menu } from "./menu";
import { BuyItLogo } from "@/imgs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { InputBody2 } from "@/ui/forms/style";
import Form from "next/form";
import { useEmail } from "@/lib/hooks";

export function Header() {
  const path = usePathname();
  const email = useEmail();
  let isSearch = false;
  const strgparam = JSON.stringify(path);
  console.log(strgparam);
  const p = strgparam.split("/")[1].slice(0, 6);
  console.log(p);
  if (p === "item") {
    isSearch = true;
  } else if (p === "search") {
    isSearch = true;
  } else {
    isSearch = false;
  }
  console.log(isSearch);
  function SearchHeaderForm(prop: any) {
    const isSearch = prop.conditional;
    const router = useRouter();
    const handlerSearchForm = (e: any) => {
      e.preventDefault();
      const q = e.target.query.value;
      if (q === "") {
        throw console.log({ message: "search vacío" });
      } else {
        router.push("/search?query=" + q + "&offset=0");
      }
    };
    return isSearch ? (
      <Form
        className="invisible w-[0px] h-0 md:visible md:h-[40px] md:flex md:gap-2 md:items-center md:w-[570px]"
        action=""
        onSubmit={handlerSearchForm}
      >
        <InputBody2
          className="w-[75%]"
          name="query"
          placeholder="Click here to search"
        />
        <SearchButton2 type="submit">Search</SearchButton2>
      </Form>
    ) : (
      <></>
    );
  }

  const handlerOpenMenu = (e: any) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu!.style.display = "flex";
  };

  function LogInButton(props: any) {
    return (
      <button className={props.classButton}>
        {" "}
        <Link href={"/signin"}>Log In</Link>
      </button>
    );
  }
  function ProfileButton(props: any) {
    return (
      <button className={props.classButton}>
        {" "}
        <Link href={"/profile"}>Profile</Link>
      </button>
    );
  }
  return (
    <div className="bg-black md:pb-5 flex justify-between gap-3 py-5 px-5 items-center">
      <Link href={"/"}>
        <BuyItLogo />
      </Link>
      <SearchHeaderForm conditional={isSearch} />
      {email ? (
        <ProfileButton
          classButton={
            "invisible w-0 h-0 md:w-[80px] md:h-[40px] md:visible bg-red-700 rounded-lg text-[white] px-4"
          }
        />
      ) : (
        <LogInButton
          classButton={
            "invisible md:visible bg-red-700 rounded-lg text-[white] px-4 h-[40px]"
          }
        />
      )}
      <BurgerButton classButton={"block md:hidden"} handler={handlerOpenMenu} />
      <div className="divMenu" id="menu">
        <Menu />
      </div>
    </div>
  );
}
