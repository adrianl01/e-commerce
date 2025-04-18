import { useRouter } from "next/router";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";

export default function CheckoutPage() {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(router);
  return (
    <Body>
      <Header />
      <SearchForm />
      {/* <Item itemId={router.query} /> */}
      <Footer />
    </Body>
  );
}
