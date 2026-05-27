import { Product } from "@/lib/hooks/products/useProduct";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div
            id={product.objectID}
            key={product.objectID}
            className="cursor-pointer overflow-hidden rounded-[12px] border border-[#D9CFC0] bg-white transition-transform hover:-translate-y-[3px] min-w-[280px]"
            onClick={() => (window.location.href = `/item/${product.objectID}`)}
          >
            {/* Image */}
            <div className="flex h-[160px] items-center justify-center overflow-hidden bg-[#EDE4D6]">
              {product.Images?.[0]?.url ? (
                <img
                  src={product.Images[0].url}
                  alt={product.Name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-sm text-[#9A7E62]">
                  No image
                </div>
              )}
            </div>

            {/* Body */}
            <div className="px-4 py-[14px]">
              <div className="mb-1 text-[14px] font-medium text-[#3B2A1A]">
                {product.Name}
              </div>

              <div className="mb-[10px] text-[12px] text-[#9A7E62]">
                by {product.Vendor ?? "Unknown seller"}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-[15px] font-medium text-[#7A5C3F]">
                  $
                  {product.Unit_cost
                    ? product.Unit_cost.toFixed(2)
                    : "0.00"}
                </div>

                <button className="rounded-[6px] border border-[#C4AA8A] bg-transparent px-3 py-[5px] text-[12px] text-[#7A5C3F] transition-colors hover:bg-[#EDE4D6]">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
    );
}