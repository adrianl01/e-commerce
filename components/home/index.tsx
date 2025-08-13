import { HomeForm } from "@/ui/forms";

export function HomeComp() {
  return (
    <div className="flex justify-center items-stretch flex-col flex-grow gap-10 h-[calc(100vh-80px)] text-black p-[15px]">
      <div className=" flex flex-col justify-center items-center text-[55px]">
        <div className="text-[75px]">Compralo</div>
        <div className="text-[25px]">The best online furniture store</div>
      </div>
      <HomeForm
        className="flex flex-col gap-4 w-full max-w-[450px] mx-auto"
        classInput="border-solid border-black border-[5px] rounded-lg h-10 w-[100%] text-gray-500 text-[20px] text-center"
        classButton="bg-[#d14e6d] w-[100%] rounded-lg border-none text-[28px]"
      />
    </div>
  );
}
