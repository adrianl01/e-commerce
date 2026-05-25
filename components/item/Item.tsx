"use client";

import { useProduct } from "@/lib/hooks/products/useProduct";
import { Body } from "@/ui/typography/inter";
import { useRouter } from "next/navigation";


interface Product {
  objectID: string;
  Name: string;
  Description: string;
  Unit_cost: number;
  Images?: { url: string }[];
}

export function Item({ itemId }: { itemId: string }) {
  const router = useRouter();
  const { data, error, isLoading } = useProduct({ id: itemId }) as { data: Product | null; error: any; isLoading: boolean };

  const handleBuy = async () => {
    const res = await useProduct({ id: itemId });

    if (res.error === "Token Not Found") {
      alert("You must log in first");
      return;
    }
    console.log("Checkout response:", res); // Debug log to check the response from useProduct

    router.push(res.data?.objectID ? `/checkout/${res.data.objectID}` : "/checkout");
  };

  if (isLoading) {
    return (
      <Body>
        <div className="mx-auto flex min-h-[70vh] max-w-[1200px] items-center justify-center px-10">
          <p className="text-[#6B5240]">Loading product...</p>
        </div>
      </Body>
    );
  }

  if (error || !data) {
    return (
      <Body>
        <div className="mx-auto flex min-h-[70vh] max-w-[1200px] items-center justify-center px-10">
          <p className="text-[#6B5240]">
            There was an error loading this product.
          </p>
        </div>
      </Body>
    );
  }

  return (
    <Body>
      <section className="mx-auto min-h-[70vh] max-w-[1200px] px-10 py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-2xl border border-[#D9CFC0] bg-[#EDE4D6]">
              {data.Images?.[0]?.url ? (
                <img
                  src={data.Images[0].url}
                  alt={data.Name}
                  className="h-[500px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[500px] items-center justify-center text-[#9A7E62]">
                  No image available
                </div>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            {/* <div className="mb-4 text-[12px] uppercase tracking-[1.2px] text-[#9A7E62]">
              Featured product
            </div> */}

            <h1 className="mb-4 text-[52px] font-medium leading-[1.1] text-[#3B2A1A]">
              {data.Name}
            </h1>

            <div className="mb-6 text-[42px] font-medium text-[#7A5C3F]">
              ${data.Unit_cost.toFixed(2)}
            </div>

            <div className="flex gap-2 mb-4">
              <button
                onClick={handleBuy}
                className="rounded-[10px] bg-[#7A5C3F] px-8 py-4 text-[15px] font-medium text-[#FAF7F2] transition-colors hover:bg-[#5E4530]"
              >
                Buy now
              </button>

              <button className="rounded-[10px] border border-[#C4AA8A] bg-transparent px-8 py-4 text-[15px] font-medium text-[#7A5C3F] transition-colors hover:bg-[#EDE4D6]">
                Add to cart
              </button>
            </div>
            <div className="rounded-2xl border border-[#D9CFC0] bg-white p-6">
              <h3 className="mb-3 text-[18px] font-medium text-[#3B2A1A]">
                Description
              </h3>

              <p className="text-[15px] leading-7 text-[#6B5240]">
                {data.Description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Body>
  );
}