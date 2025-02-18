import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export default function ItemPage() {
  const router = useRouter();
  return (
    <Body>
      <Header />
      <SearchForm />
      <Item itemId={router.query} />
      <Footer />
    </Body>
  );
}
