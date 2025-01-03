import { BoxProd } from "@/components/box-product";
import { ProdDiv2 } from "./style";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { searchProducts } from "@/lib";
import { useRouter } from "next/router";

export function ProdResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = router.asPath;
  const goBack = router.back;

  const query = searchParams.get("query") as any;
  const offset = searchParams.get("offset") as any;

  const newOffset = JSON.parse(offset) + 3;
  console.log(newOffset);
  function BackButton(props: any) {
    console.log(props);
    if (props.offset > 0) {
      return (
        <button
          onClick={() => {
            goBack();
          }}
        >
          {"<<"}
        </button>
      );
    }
  }

  const newPath = "/search?query=" + query + "&offset=" + newOffset;

  const result = searchProducts(query, offset);
  const [data, setData] = useState("") as any;
  result.then((r) => {
    console.log(r);
    if (r !== null) {
      setData(r);
    } else {
      return <div>nada</div>;
    }
  });
  function ShowData(props: any) {
    if (props.dataList.results !== undefined) {
      return (
        <div className="flex flex-col gap-4">
          <div className="text-2xl">
            Se encontraron {props.dataList.pagination.total} resultados
          </div>
          {data.results.map((r: any) => {
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
    <ProdDiv2>
      <ShowData dataList={data} />
      <div className="flex gap-5">
        <BackButton offset={offset} />
        <Link href={newPath}>Ver más</Link>
      </div>
    </ProdDiv2>
  );
}
