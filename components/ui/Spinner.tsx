// components/ui/Spinner.tsx

export default function Spinner() {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-[#D9C7B4]" />

        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#8B6745] border-r-[#8B6745] animate-spin" />
      </div>
    </div>
  );
}