import { getProductbyId } from "@/lib";
import { useProduct } from "@/lib/hooks";
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
    if (props.prodData !== undefined) {
      const prod = props.prodData;
      return (
        <div className="h-full text-4xl flex flex-col px-5 py-4 font-bold gap-7">
          <img className="h-[237px]" src={prod.img} alt="item" />
          <h2>{prod.Name}</h2>
          <div>${prod.Unit_cost}</div>
          <button className="h-[63px] bg-cyan-200 rounded-lg">Comprar</button>
          <p className="font-normal text-2xl">
            Descripción:{" " + prod.Description}
          </p>
        </div>
      );
    } else {
      return <div>Cargando...</div>;
    }
  }
  return (
    <Body>
      <ShowData prodData={data} />
    </Body>
  );
}
