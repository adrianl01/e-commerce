"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/lib/hooks/products/useProducts";

const PAGE_SIZE = 3;

export function ProdResults() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams?.get("query") ?? "";
  const offset = searchParams?.get("offset") ?? "0";

  const offsetNum = parseInt(offset, 10);

  const { data, error, isLoading } = useProducts({
    query,
    offset,
    limit: PAGE_SIZE,
  });

  const results = data?.results ?? [];
  const total = data?.pagination.total ?? 0;

  const showing = results.length;

  const nextOffset = offsetNum + PAGE_SIZE;
  const prevOffset = Math.max(offsetNum - PAGE_SIZE, 0);

  const hasNextPage = nextOffset < total;
  const hasPrevPage = offsetNum > 0;

  if (isLoading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-400">
        Something went wrong.
      </div>
    );
  }

  if (!isLoading && results.length === 0) {
    return (
      <div className="text-center py-10">
        No results found.
      </div>
    );
  }

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-10">
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl font-medium">
            {total} results found with query "{query}"
          </div>

          <div className="text-[#7A6653]">
            Showing {offsetNum + 1} –{" "}
            {offsetNum + showing} of {total}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {results.map((r) => (
            <Link
              href={`/item/${r.objectID}`}
              key={r.objectID}
            >
              <ProductCard product={r} />
            </Link>
          ))}
        </div>

        <div className="flex gap-6 items-center text-lg">
          {hasPrevPage && (
            <Link
              href={`/search?query=${query}&offset=${prevOffset}`}
              className="hover:underline"
            >
              ← Previous
            </Link>
          )}

          {hasNextPage && (
            <Link
              href={`/search?query=${query}&offset=${nextOffset}`}
              className="hover:underline"
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}