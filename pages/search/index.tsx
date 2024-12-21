import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProdResults } from "@/components/products/search";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";

export default function SearchPage() {
  return (
    <Body>
      <Header />
      <SearchForm />
      <ProdResults />
      <Footer />
    </Body>
  );
}
