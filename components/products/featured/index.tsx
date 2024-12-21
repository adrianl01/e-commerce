import { searchProducts } from "@/lib";
import { BoxProd } from "../../box-product";
import { ProdDiv, ProdTitle } from "./style";
import { useState } from "react";
import Link from "next/link";

const offset = Math.floor(Math.random() * 17).toString();

export function FeaturedProducts() {
  console.log("FeaturedProducts");
  // console.log("random offset", offset);

  const result = searchProducts("random", offset);
  const [data, setData] = useState("") as any;
  result.then((r) => {
    console.log(r);
    setData(r);
  });

  function ShowData(props: any) {
    if (props.dataList) {
      return (
        <div className="flex flex-col gap-4">
          {props.dataList.results.map((r: any) => {
            return (
              <Link href={"/item/" + r.objectID} key={r.objectID}>
                {" "}
                <BoxProd
                  title={r.Name}
                  price={r.Unit_cost}
                  img={r.Images[0].url}
                />
              </Link>
            );
          })}
        </div>
      );
    } else {
      return <div>Cargando...</div>;
    }
  }

  return (
    <ProdDiv>
      <ProdTitle>Productos Destacados</ProdTitle>
      <ShowData dataList={data} />
    </ProdDiv>
  );
}
