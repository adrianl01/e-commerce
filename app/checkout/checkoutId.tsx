import { useRouter } from "next/router";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import { Item } from "@/components/item/Item";
import { SearchForm } from "@/components/ui/forms";
import { Body } from "@/components/ui/typography/inter";

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
