import { fetchAPI } from "@/lib/api";
import { useBuyProductFunc } from "@/lib/hooks";
import { Body } from "@/ui/typography/inter";
import { useParams, useRouter } from "next/navigation";
import useSWRImmutable from "swr/immutable";

export function Item(props: any) {
  const { data, error, isLoading } = useSWRImmutable(
    "products/" + props.itemId.itemId,
    fetchAPI as any
  );
  const router = useRouter();
  const productId = props.itemId.itemId;
  const handleBuy = async () => {
    const res = await useBuyProductFunc(productId);
    if (res.message == "Token Not Found") {
      return <div>You must Log In first</div>;
    } else {
      router.push(res.url);
    }
  };

  function ShowData() {
    if (isLoading)
      return (
        <div className="items-center justify-center w-full self-center">
          Loading...
        </div>
      );

    if (error) return <div>There was an Error</div>;

    if (data) console.log(data);
    return (
      <div className="text-4xl flex flex-row px-5 py-6 font-bold gap-7">
        <div className="flex-row max-w-[50%] gap-5 justify-center items-center">
          <img
            className="max-h-[250px] self-center"
            src={data.Images[0].url}
            alt="item"
          />
          <p className="font-normal text-[14px] max-w-[300px] leading-tight">
            Description:{" " + data.Description}
          </p>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <h2 className="font-bold text-[42px]">{data.Name}</h2>
          <div className="font-bold text-[42px]">${data.Unit_cost}</div>
          <button className="h-[63px] px-3 bg-red-400" onClick={handleBuy}>
            Buy
          </button>
        </div>
      </div>
    );
  }
  return (
    <Body>
      <ShowData />
    </Body>
  );
}
