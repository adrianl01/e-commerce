"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import { Item } from "@/components/item/Item";
import { SearchForm } from "@/ui/forms";
import { Body } from "@/ui/typography/inter";
import { use } from "react";

export default function ItemPage({ params }: { params: Promise<{ itemId: string }>}) {;
  const { itemId } = use(params)
  return (
    <Body>
      <Header />
      <SearchForm />
      <Item itemId={itemId} />
      <Footer />
    </Body>
  );
}
