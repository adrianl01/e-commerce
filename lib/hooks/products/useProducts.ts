"use client";

import useSWRImmutable from "swr/immutable";

import { searchProducts } from "../../services/products";
import { Product } from "./useProduct";

interface UseProductsParams {
  query: string;
  offset: string;
  limit: 1 | 3;
}

interface ResProduct {
  pagination: {
    total: number;
    offset: number;
    limit: number;
  };
  results: Product[];
}


export function useProducts({
  query,
  offset,
  limit,
}: UseProductsParams) {
  const shouldFetch =
    query && query.trim() !== "";

  const { data, error, isLoading } =
    useSWRImmutable(
      shouldFetch
        ? ["products", query, offset, limit]
        : null,
      () =>
        searchProducts(
          query,
          offset,
          limit,
        )
    );

  return {
    data: data as ResProduct ?? null,
    error,
    isLoading,
  };
}