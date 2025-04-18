import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";
import { useParams } from "next/navigation";

export default function CheckoutPage() {
  const p = useParams();
  console.log(p);

  return (
    <Body>
      <Header />
      <SearchForm />
      {/* <Item checkoutId={router} /> */}
      <Footer />
    </Body>
  );
}
