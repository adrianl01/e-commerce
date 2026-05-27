// components/Home.tsx
"use client";
import { useRouter } from "next/navigation";
import SuggestedProduct from "../FeaturedProductCard";


export default function Home() {
  const router = useRouter();

  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = (form.elements.namedItem('query') as HTMLInputElement).value.trim();
    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}&offset=0`);
    }
      console.log('Searching for:', query);
    }
  

  return (
    <section className="mx-auto flex max-w-[960px] items-center gap-12 px-10 pb-[60px] pt-[72px]">
      {/* Left */}
      <div className="flex-1">
        <div className="mb-4 text-[12px] uppercase tracking-[1.2px] text-[#9A7E62]">
          New collection 2026
        </div>

        <h1 className="mb-[18px] text-[44px] font-medium leading-[1.2] text-[#3B2A1A]">
          Your home,
          <br />
          <span className="text-[#7A5C3F]">your warmth.</span>
        </h1>

        <p className="mb-8 max-w-[380px] text-[16px] leading-[1.7] text-[#6B5240]">
          Handpicked furniture and decor that bring comfort and
          character to every corner of your home.
        </p>

        <form className="flex max-w-[420px] gap-[10px]" onSubmit={handleSearch}>
          <input
            type="text"
            name="query"
            placeholder="Search chairs, lamps, rugs…"
            className="flex-1 rounded-[8px] border border-[#C4AA8A] bg-white px-4 py-[11px] text-[14px] text-[#3B2A1A] outline-none placeholder:text-[#B0957A] focus:border-[#7A5C3F]"
          />

          <button className="rounded-[8px] bg-[#7A5C3F] px-[22px] py-[11px] text-[14px] text-[#FAF7F2] transition-colors hover:bg-[#5E4530]"
          type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* Right */}
      <SuggestedProduct />
    </section>
  );
}