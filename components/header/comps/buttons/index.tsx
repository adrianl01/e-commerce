import Link from "next/link";

type HeaderButtonProps = {
  className?: string;
  text?: string;
  link: string;
};

export function HeaderButton({ className, text, link }: HeaderButtonProps) {
  return (
    <button
      className={
        "invisible md:visible bg-red-700 rounded-lg text-[white] px-4 h-[40px] hover:bg-red-800 transition-all duration-300 " +
        className
      }
      onClick={(e) => e.preventDefault()}
    >
      {" "}
      <Link href={link}>{text}</Link>
    </button>
  );
}
