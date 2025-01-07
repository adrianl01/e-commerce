import { searchProducts } from "@/lib";
import { BoxProd } from "../../box-product";
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
                  mainDiv="flex flex-col bg-[#e75a7c] w-[328px] h-[322px] rounded-lg border-solid border-black border-[4px] text-black"
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
      return <div>Loading...</div>;
    }
  }
  return (
    <div className="bg-[#863145] flex flex-col items-center justify-center w-[100%] text-white pt-[20px] pb-[20px] gap-[20px] h-[1213px]">
      <h3 className="text-[45px] text-center m-[10px] text-[#fc86ae]">
        Suggested Products
      </h3>
      <ShowData dataList={data} />
    </div>
  );
}
