import { BoxDiv, BoxTitlePriceDiv } from "./style";

export function BoxProd(prop: any) {
  return (
    <div className={prop.mainDiv}>
      <div className="flex justify-center w-full h-[70%]">
        <img className="h-[100%]" src={prop.img} alt={prop.title} />
      </div>

      <BoxTitlePriceDiv>
        <div>{prop.title}</div>
        <div>${prop.price}</div>
      </BoxTitlePriceDiv>
    </div>
  );
}
