"use client";
import { BoxProd } from "@/components/box-product";
import { ProdDiv2 } from "./style";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchProducts, Product } from "@/redux/slices/productSlice";

export function ProdResults() {
  const dispatch = useAppDispatch();
  const { filtered, status, error } = useAppSelector((s) => s.products);

  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams?.get("query") ?? "";
  const offset = searchParams?.get("offset") ?? "0";
  const offsetNum = parseInt(offset, 10);
  const newOffset = offsetNum + 3;
  const newPath = `/search?query=${query}&offset=${newOffset}`;

  useEffect(() => {
    if (!query) return;
    dispatch(fetchProducts({ query, offset }));
  }, [query, offset, dispatch]);

  // paginación: total viene de la API — lo guardamos en el slice si hace falta,
  // por ahora lo calculamos con lo que tenemos
  const showing = filtered.length;

  if (status === "loading") return <div className="text-center py-10">Loading...</div>;
  if (status === "failed") return <div className="text-center py-10 text-red-400">{error}</div>;
  if (status === "succeeded" && filtered.length === 0) return <div className="text-center py-10">No results found.</div>;

  return (
    <ProdDiv2>
      {status === "succeeded" && (
        <div className="flex flex-col gap-4 items-center">
          <div className="text-2xl">{showing} results found</div>

          <div className="flex flex-col md:flex-row gap-5">
            {filtered.map((r:Product) => (
              <Link href={`/item/${r.objectID}`} key={r.objectID}>
                <BoxProd
                  mainDiv="flex flex-col shadow-lg transition duration-200 hover:scale-105 bg-[#e75a7c] w-[328px] lg:min-w-[320px] lg:max-w-[350px] h-[322px] lg:h-[300px] border-solid border-black border-[4px] text-black focus:ring-2 justify-between"
                  title={r.Name}
                  price={r.Unit_cost}
                  img={r.Images[0].url}
                />
              </Link>
            ))}
          </div>

          <div className="text-2xl">
            {offsetNum + 1}–{offsetNum + showing}
          </div>
        </div>
      )}

      <div className="flex gap-5 text-2xl">
        {offsetNum > 0 && (
          <button onClick={() => router.back()}>{"<<"}</button>
        )}
        {showing === 3 && (
          <Link href={newPath}>Next Page</Link>
        )}
      </div>
    </ProdDiv2>
  );
}
