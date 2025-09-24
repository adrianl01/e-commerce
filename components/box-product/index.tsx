import { BoxDiv, BoxTitlePriceDiv } from "./style";

type BoxProdProps = {
  mainDiv: string;
  img: string;
  title: string;
  price: number;
};

export function BoxProd({ mainDiv, img, title, price }: BoxProdProps) {
  return (
    <div className={mainDiv}>
      <div className="flex justify-center w-full h-[70%]">
        <img className="h-[100%]" src={img} alt={title} />
      </div>

      <BoxTitlePriceDiv>
        <div>{title}</div>
        <div>${price}</div>
      </BoxTitlePriceDiv>
    </div>
  );
}
