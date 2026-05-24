import SuggestedProductsSection from '@/components/products/featured/SuggestedProductsSection';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header';
import HomeComp from '@/components/home/Home';
import { Body } from '@/ui/typography/inter';
import BrowseRooms from '@/components/BrowseRooms';

export default function Page() {
  return (
    <Body>
      <Header />
      <HomeComp />
      <hr className="border-t-2 border-solid border-[#D9CFC0] mx-10" />
      <BrowseRooms />
      <hr className="border-t-2 border-solid border-[#D9CFC0] mx-10" />
      <SuggestedProductsSection />
      <Footer />
    </Body>
  );
}
