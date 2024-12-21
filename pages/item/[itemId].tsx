import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";
import { useParams } from "next/navigation";

export default function ItemPage() {
  const param = useParams();
  return (
    <Body>
      <Header />
      <SearchForm />
      <Item itemId={param} />
      <Footer />
    </Body>
  );
}
