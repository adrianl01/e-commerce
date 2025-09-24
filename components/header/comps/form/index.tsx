import { SearchButton2 } from "@/ui/buttons";
import { InputBody2 } from "@/ui/inputs";
import { useRouter } from "next/router";
import Form from "next/form";

export function SearchHeaderForm(prop: any) {
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
        className="w-[75%] h-[37px] rounded-lg text-center hover:border-red-400 focus:border-red-400 duration-200 outline-none"
        name="query"
        placeholder="Click here to search"
      />
      <SearchButton2 type="submit">Search</SearchButton2>
    </Form>
  ) : (
    <></>
  );
}
