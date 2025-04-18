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
  const goBack = router.back;
  const query = searchParams.get("query") as any;
  const offset = searchParams.get("offset") as any;
  const newOffset = JSON.parse(offset) + 3;
  function BackButton(props: any) {
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
    if (r !== null) {
      setData(r);
    } else {
      return <div>nada</div>;
    }
  });
  function ShowData(props: any) {
    if (props.dataList.results !== undefined) {
      const offThree = JSON.parse(offset) + 3;
      const totalRes = JSON.parse(props.dataList.pagination.total);
      const num = () => {
        const divisions = totalRes / 3;
        const totalDivs = Math.floor(divisions) * 3;
        if (totalDivs === JSON.parse(offset)) {
          return totalRes;
        } else {
          return offThree;
        }
      };

      return (
        <div className="flex flex-col gap-4 items-center">
          <div className="text-2xl">
            {props.dataList.pagination.total} results found
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {data.results.map((r: any) => {
              return (
                <Link href={"/item/" + r.objectID} key={r.objectID}>
                  {" "}
                  <BoxProd
                    mainDiv="flex flex-col bg-[#e75a7c] w-[328px] md:w-[65vh] h-[322px] md:h-[60vh] rounded-lg border-solid border-black border-[4px] text-black"
                    title={r.Name}
                    price={r.Unit_cost}
                    img={r.Images[0].url}
                  />
                </Link>
              );
            })}
          </div>
          <div className="text-2xl">
            {JSON.parse(offset) + 1}-{num()}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  return (
    <ProdDiv2>
      <ShowData dataList={data} />
      <div className="flex gap-5 text-2xl">
        <BackButton offset={offset} />
        <Link href={newPath}>Next Page</Link>
      </div>
    </ProdDiv2>
  );
}
