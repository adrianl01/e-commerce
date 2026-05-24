// components/BrowseRooms.tsx

import {
  Sofa,
  BedDouble,
  CookingPot,
  Lightbulb,
} from "lucide-react";

const categories = [
  {
    icon: Sofa,
    label: "Living room",
    count: "142 items",
  },
  {
    icon: BedDouble,
    label: "Bedroom",
    count: "98 items",
  },
  {
    icon: CookingPot,
    label: "Kitchen & dining",
    count: "76 items",
  },
  {
    icon: Lightbulb,
    label: "Lighting",
    count: "54 items",
  },
];

export default function BrowseRooms() {
  return (
    <section className="mx-auto max-w-[960px] px-10 py-12">
      {/* Header */}
      <div className="mb-7 flex items-baseline justify-between">
        <h2 className="text-[22px] font-medium text-[#3B2A1A]">
          Browse by room
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-[14px]">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex cursor-pointer flex-col gap-2 rounded-[10px] border border-[#D9CFC0] bg-[#EDE4D6] px-4 py-5 transition-colors hover:bg-[#E3D8C7]"
            >
              <Icon size={22} className="text-[#7A5C3F]" />

              <div className="text-[13px] font-medium text-[#3B2A1A]">
                {item.label}
              </div>

              <div className="text-[12px] text-[#9A7E62]">
                {item.count}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}