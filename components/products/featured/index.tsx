import { searchProducts } from "@/lib";
import { BoxProd } from "../../box-product";
import { useState } from "react";
import Link from "next/link";

const offset = Math.floor(Math.random() * 17).toString();

export function FeaturedProducts() {
  // console.log("random offset", offset);

  const result = searchProducts("random", offset);
  const [data, setData] = useState("") as any;
  result.then((r) => {
    setData(r);
  });

  function ShowData(props: any) {
    if (props.dataList) {
      return (
        <div className="flex flex-col gap-4 lg:flex-row">
          {props.dataList.results.map((r: any) => {
            return (
              <Link href={"/item/" + r.objectID} key={r.objectID}>
                {" "}
                <BoxProd
                  mainDiv="flex flex-col bg-[#e75a7c] w-[328px] lg:min-w-[320px] lg:max-w-[350px] h-[322px] lg:h-[300px] border-solid border-black border-[4px] text-black justify-between"
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
    <div className="bg-[#863145] flex flex-col items-center w-[100%] text-white gap-[20px] h-[100%] pb-10">
      <h3 className="text-[45px] text-center pt-4 text-[#fc86ae]">
        Suggested Products
      </h3>
      <ShowData dataList={data} />
    </div>
  );
}
