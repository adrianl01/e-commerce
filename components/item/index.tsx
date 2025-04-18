import { getProductbyId } from "@/lib";
import { useBuyProduct } from "@/lib/api";
import { Body } from "@/ui/typography/inter";
import { useParams } from "next/navigation";
import { useState } from "react";

export function Item(props: any) {
  const productId = props.itemId.itemId;
  const result = getProductbyId(productId);
  const [data, setData] = useState("") as any;
  const param = useParams();

  result.then((r: any) => {
    if (r !== null) {
      setData(r);
    } else {
      return <div>nada</div>;
    }
  });
  const handleBuy = async () => {
    console.log("handleBuy button");
    const id = param.itemId as string;
    const res = await useBuyProduct(id);
    console.log(res);
    // router.push("");
  };

  function ShowData(props: any) {
    if (props.prodData) {
      const prod = props.prodData as any;
      const img = prod.Images[0].url;
      return (
        <div className="h-[740px] text-4xl grid grid-cols-1 md:grid-cols-2 px-5 py-4 font-bold gap-7">
          <img className="w-[100%]" src={img} alt="item" />
          <div className="grid gap-6">
            <h2 className="font-bold text-[42px]">{prod.Name}</h2>
            <div className="font-bold text-[42px]">${prod.Unit_cost}</div>
            <button className="h-[63px] px-3 bg-red-400" onClick={handleBuy}>
              Buy
            </button>
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
