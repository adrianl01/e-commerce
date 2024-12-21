import { FeaturedProducts } from "@/components/products/featured";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomeComp } from "@/components/home";
import { HomeBody } from "@/components/home/style";
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
