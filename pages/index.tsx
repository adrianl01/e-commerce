import { FeaturedProducts } from "@/components/products/featured";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomeComp } from "@/components/home";
import { Body } from "@/ui/typography/inter";

export default function HomePage() {
  return (
    <Body>
      <Header />
      <HomeComp />
      <FeaturedProducts />
      <Footer />
    </Body>
  );
}
