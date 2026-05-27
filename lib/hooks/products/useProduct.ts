'use client';

import useSWRImmutable from 'swr/immutable';

import { getProductById } from '../../services/products';

interface UseProductParams {
  id: string;
}

export interface Product {
  objectID: string;
  Name: string;
  Unit_cost: number;
  Vendor: string;
  Images: { url: string }[];
  Type: string;
  Description: string;
}

export function useProduct({ id }: UseProductParams) {
  const shouldFetch = id && id.trim() !== '';

  const { data, error, isLoading } = useSWRImmutable(shouldFetch ? ['products', id] : null, () => getProductById(id));

  return {
    data: data as Product ?? null,
    error,
    isLoading
  };
}

export function useProductIds({ ids }: { ids: string[] }) {
  const shouldFetch = ids && ids.length > 0;

  const { data, error, isLoading } = useSWRImmutable(shouldFetch ? ['products', ids.join(',')] : null, () => Promise.all(ids.map(getProductById)));

  return {
    data: data as Product[] ?? [],
    error,
    isLoading
  };
}
