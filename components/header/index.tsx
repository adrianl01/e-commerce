import { BurgerButton, SearchButton2 } from "@/ui/buttons";
import { Menu } from "./menu";
import { BuyItLogo } from "@/imgs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { InputBody2 } from "@/ui/forms/style";
import Form from "next/form";
import { useEmail } from "@/lib/hooks";

export function Header() {
  const router = usePathname();
  const email = useEmail();
  console.log(router);
  const sliced = router.slice(0, 5);
  console.log(sliced);
  let isSearch = false;
  if (router === "/search") {
    isSearch = true;
  }
  if (sliced === "/item") {
    isSearch = true;
  }
  console.log(isSearch);

  function SearchHeaderForm() {
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
    return (
      <Form
        className="invisible md:visible flex gap-3 items-center w-[70vh]"
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
    <div className="bg-black flex justify-between py-5 px-[22px] ">
      <Link href={"/"}>
        <BuyItLogo />
      </Link>

      {isSearch ? <SearchHeaderForm /> : <div></div>}

      {email ? (
        <ProfileButton
          classButton={
            "invisible md:visible bg-red-700 rounded-lg text-[white] px-4"
          }
        />
      ) : (
        <ProfileButton
          classButton={
            "invisible md:visible bg-red-700 rounded-lg text-[white] px-4"
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
