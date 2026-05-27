// app/not-found.tsx

import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F1EC]">
      <Header />

      <section className="w-full flex flex-col items-center justify-center text-center flex-1 px-6 py-10">
        <p className="uppercase tracking-[0.25em] text-sm text-[#9A7B5A] mb-4">
          Error 404
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold text-[#2D1F17] leading-tight">
          This page
          <br />
          doesn&apos;t exist.
        </h1>

        <p className="mt-6 text-base md:text-lg text-[#7A6653] max-w-xl leading-8">
          The page you&apos;re looking for may have been removed, renamed,
          or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/"
            className="bg-[#8B6745] hover:bg-[#75563A] transition-colors text-white px-8 py-4 rounded-2xl font-medium"
          >
            Back to home
          </Link>

          {/* <Link
            href="/"
            className="border border-[#C8B39D] hover:bg-[#EFE7DE] transition-colors text-[#5E4632] px-8 py-4 rounded-2xl font-medium"
          >
            Browse products
          </Link> */}
        </div>
      </section>

      <Footer />
    </main>
  );
}