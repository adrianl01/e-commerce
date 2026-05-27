'use client';

import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/hooks/products/useProduct';
import { useProducts } from '@/lib/hooks/products/useProducts';
import { motion } from 'framer-motion';

const offset = Math.floor(Math.random() * 17).toString();

export default function SuggestedProductsSection() {
  const { data, isLoading } = useProducts({ query: 'random', offset, limit: 3 });
  console.log(data);

  if (isLoading) {
    return <section className="mx-auto max-w-[960px] px-10 py-12">Loading...</section>;
  }

  if (data === null) {
    return <section className="mx-auto max-w-[960px] px-10 py-12">Error loading products</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto max-w-[960px] px-10 py-12"
    >
      {/* Header */}
      <div className="mb-7 flex items-baseline justify-between">
        <h2 className="text-[22px] font-medium text-[#3B2A1A]">Suggested for you</h2>

        {/* <a href="#" className="text-[13px] text-[#7A5C3F] transition-colors hover:text-[#3B2A1A]">
          See all →
        </a> */}
      </div>

      {/* Products */}
      <div className="grid grid-cols-3 gap-5">
        {data?.results?.map((product: Product) => (
          <ProductCard key={product.objectID} product={product} />
        ))}
      </div>
    </motion.section>
  );
}
