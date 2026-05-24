'use client';

import useSWRImmutable from 'swr/immutable';

import { getProductById } from '../../services/products';

interface UseProductParams {
  id: string;
}

export interface Product {
  objectID: string;
  Name: string;
  Unit_cost?: number;
  seller?: string;
  Images?: { url: string }[];
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
