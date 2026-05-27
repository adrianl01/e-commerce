"use client";
import { SearchButton2 } from "@/components/ui/buttons";
import { InputBody2 } from "@/components/ui/inputs";
import { useRouter } from "next/navigation";

export function SearchHeaderForm(prop: any) {
  const isSearch = prop.conditional;
  const router = useRouter();

  const handlerSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.elements.namedItem("query") as HTMLInputElement).value;
    if (!q.trim()) {
      console.log({ message: "search vacío" });
      return;
    }
    router.push(`/search?query=${encodeURIComponent(q)}&offset=0`);
  };

  if (!isSearch) return <></>;

  return (
    <form
      className="invisible w-[0px] h-0 md:visible md:h-[40px] md:flex md:gap-2 md:items-center md:w-[570px]"
      onSubmit={handlerSearchForm}
    >
      <InputBody2
        className="w-[75%] h-[37px] rounded-lg text-center hover:border-red-400 focus:border-red-400 duration-200 outline-none"
        name="query"
        placeholder="Click here to search"
      />
      <SearchButton2 type="submit">Search</SearchButton2>
    </form>
  );
}