import { getProductbyId } from "@/lib";
import { Body } from "@/ui/typography/inter";
import { useState } from "react";

export function Item(props: any) {
  const productId = props.itemId.itemId;
  const result = getProductbyId(productId);
  const [data, setData] = useState("") as any;

  result.then((r: any) => {
    if (r !== null) {
      setData(r);
    } else {
      return <div>nada</div>;
    }
  });

  function ShowData(props: any) {
    if (props.prodData) {
      const prod = props.prodData as any;
      const img = prod.Images[0].url;
      return (
        <div className="h-full text-4xl grid grid-cols-1 md:grid-cols-2 px-5 py-4 font-bold gap-7">
          <img className="w-[100%]" src={img} alt="item" />
          <div className="grid gap-6">
            <h2>{prod.Name}</h2>
            <div>${prod.Unit_cost}</div>
            <button className="h-[63px] px-3 bg-red-400 rounded-lg">Buy</button>
            <p className="font-normal text-2xl">
              Description:{" " + prod.Description}
            </p>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
  return (
    <Body>
      <ShowData prodData={data} />
    </Body>
  );
}
