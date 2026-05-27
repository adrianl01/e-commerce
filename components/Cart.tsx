// components/cart/Cart.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ShoppingBag, X, Trash2 } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  removeFromCart,
  clearCart,
  buyProduct,
} from "@/redux/slices/cartSlice";

import { useProductIds} from "@/lib/hooks/products/useProduct";

export default function Cart() {
  const dispatch = useAppDispatch();

  const { productIds, orderStatus } = useAppSelector(
    (state) => state.cart
  );

  const [open, setOpen] = useState(false);

  // armamos query usando ids
  const query = useMemo(
    () => {
      console.log("Current product IDs in cart:", productIds);
      return productIds.join(",");
    },
    [productIds]
  );

  // fetch productos reales
  const { data, isLoading } = useProductIds({ ids: productIds });

  const products = data? data : [];

  const total = products.reduce(
    (acc: number, product: any) =>
      acc + Number(product.Unit_cost || 0),
    0
  );

  const handleCheckout = async () => {
    for (const id of productIds) {
      await dispatch(buyProduct(id));
    }

    dispatch(clearCart());
    setOpen(false);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative flex h-[42px] items-center justify-center rounded-[10px] border border-[#CDBBA5] bg-white px-4 text-[#7A5C3F] transition-all hover:bg-[#EFE7DB]"
      >
        <ShoppingBag size={18} />

        {productIds.length > 0 && (
          <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6A46] text-[11px] font-medium text-white">
            {productIds.length}
          </div>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-[420px] flex-col border-l border-[#D9CFC0] bg-[#FAF7F2] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#D9CFC0] px-6 py-5">
          <div>
            <h2 className="text-[24px] font-medium text-[#3B2A1A]">
              Your cart
            </h2>

            <p className="text-[13px] text-[#9A7E62]">
              {productIds.length} items
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 text-[#7A5C3F] transition-colors hover:bg-[#EFE7DB]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {isLoading ? (
            <div className="flex items-center justify-center py-20 text-[#7A5C3F]">
              Loading cart...
            </div>
          ) : products.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag
                size={46}
                className="mb-4 text-[#B79D82]"
              />

              <h3 className="mb-2 text-[20px] font-medium text-[#3B2A1A]">
                Your cart is empty
              </h3>

              <p className="max-w-[240px] text-[14px] leading-relaxed text-[#9A7E62]">
                Add products to continue shopping.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {products.map((product: any) => (
                <div
                  key={product.objectID}
                  className="flex gap-4 rounded-[16px] border border-[#DED3C5] bg-white p-3"
                >
                  {/* Image */}
                  <div className="relative h-[92px] w-[92px] overflow-hidden rounded-[12px] bg-[#EFE7DB]">
                    <Image
                      src={product.Images?.[0]?.url}
                      alt={product.Name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-[15px] font-medium text-[#3B2A1A]">
                        {product.Name}
                      </h3>

                      <p className="mt-1 text-[12px] text-[#9A7E62]">
                        {product.seller ||
                          "Unknown seller"}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-[16px] font-medium text-[#7A5C3F]">
                        $
                        {Number(
                          product.Unit_cost
                        ).toFixed(2)}
                      </div>

                      <button
                        onClick={() =>
                          dispatch(
                            removeFromCart(
                              product.objectID
                            )
                          )
                        }
                        className="flex items-center gap-2 rounded-[10px] border border-[#D9CFC0] px-3 py-2 text-[13px] text-[#7A5C3F] transition-colors hover:bg-[#EFE7DB]"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {products.length > 0 && (
          <div className="border-t border-[#D9CFC0] bg-white px-6 py-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[15px] text-[#7A5C3F]">
                Total
              </span>

              <span className="text-[28px] font-medium text-[#3B2A1A]">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={orderStatus === "loading"}
              className="w-full rounded-[12px] bg-[#8B6A46] py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#715433] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {orderStatus === "loading"
                ? "Processing..."
                : "Checkout"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}