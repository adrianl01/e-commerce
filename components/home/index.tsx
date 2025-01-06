import { HomeForm } from "@/ui/forms";

export function HomeComp() {
  return (
    <div className="flex items-center justify-center gap-10 flex-col h-[540px] text-black p-[15px]">
      <div className=" flex flex-col justify-center items-center text-[55px]">
        <div>El Mejor</div>
        <div>E-Commerce</div>
      </div>
      <HomeForm
        classInput="border-solid border-black border-[5px] rounded-lg h-10 w-[100%] text-gray-500 text-[20px] text-center"
        classButton="bg-[#d14e6d] w-[100%] rounded-lg border-none text-[28px]"
      />
    </div>
  );
}
