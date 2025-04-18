import { useEmail, useMe } from "@/lib/hooks";
import { HomeForm } from "@/ui/forms";
import { useRouter } from "next/navigation";

export function HomeComp() {
  // const email = useEmail();
  // const user = useMe();
  // if (email) {
  //   console.log(user);
  // }
  return (
    <div className="flex items-center justify-center gap-10 flex-col h-[740px] text-black p-[15px]">
      <div className=" flex flex-col justify-center items-center text-[55px]">
        <div className="text-[75px]">Compralo</div>
        <div className="text-[25px]">The best online furniture store</div>
      </div>
      <HomeForm
        class="flex flex-col gap-4 w-[100%] sm:w-[400px]"
        classInput="border-solid border-black border-[5px] rounded-lg h-10 w-[100%] text-gray-500 text-[20px] text-center"
        classButton="bg-[#d14e6d] w-[100%] rounded-lg border-none text-[28px]"
      />
    </div>
  );
}
