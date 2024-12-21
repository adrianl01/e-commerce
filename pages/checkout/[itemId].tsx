import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";

export default function ItemPage() {
  return (
    <Body>
      <Header />
      <SearchForm />
      <Footer />
    </Body>
  );
}
