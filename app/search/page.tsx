import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import { ProdResults } from "@/components/products/search";
import { SearchForm } from "@/components/ui/forms";
import { Body } from "@/components/ui/typography/inter";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Body>
      <div className="flex-1 flex flex-col min-h-screen">
      <Header />
      <SearchForm />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <ProdResults />
      </Suspense>
      <Footer />
      </div>
    </Body>
  );
}
