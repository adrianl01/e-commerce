import { useProducts } from '@/lib/hooks/products/useProducts';
import Spinner from './ui/Spinner';
import { motion } from 'framer-motion';

const offset = Math.floor(Math.random() * 17).toString();
export default function FeaturedProduct() {
  const data = useProducts({ query: 'random', offset, limit: 1 });
  console.log('Featured product data:', data); // Debug log to check the fetched data

  return (
    <div className="basis-[300px]" id={data?.data?.results[0]?.objectID}>
      <div className="relative overflow-hidden rounded-2xl bg-[#EDE4D6] p-6">
        {data?.isLoading ? (
          <div className="text-center py-10"><Spinner /></div>
        ) : (
          <motion.div
            initial={{ opacity: -2, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute right-4 top-4 rounded-full bg-[#7A5C3F] px-[10px] py-1 text-[11px] text-[#FAF7F2]">Featured</div>

            {/* Image */}
            <div className="mb-4 flex h-[200px] w-full items-center justify-center rounded-[10px] bg-[#D9CFC0]">
              <img src={data?.data?.results?.[0]?.Images?.[0]?.url || ''} alt={data?.data?.results?.[0]?.Name || 'Product Image'} className="h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[15px] font-medium text-[#3B2A1A]">{data?.data?.results[0]?.Name}</div>
                <div className="mt-[2px] text-[12px] text-[#9A7E62]">{data?.data?.results[0]?.Vendor || 'Unknown Seller'}</div>
              </div>
              <div className="text-[18px] font-medium text-[#7A5C3F]">${data?.data?.results[0]?.Unit_cost?.toFixed(2) || '0.00'}</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
