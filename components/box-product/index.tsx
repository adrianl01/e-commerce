import { BoxDiv, BoxTitlePriceDiv } from "./style";

export function BoxProd(prop: any) {
  return (
    <BoxDiv>
      <div className="flex align-middle justify-center h-[237px] w-full">
        <img src={prop.img} alt={prop.title} style={{ maxHeight: "237px" }} />
      </div>

      <BoxTitlePriceDiv>
        <div>{prop.title}</div>
        <div>${prop.price}</div>
      </BoxTitlePriceDiv>
    </BoxDiv>
  );
}
