import { BurguerLogo, CloseLogo } from "@/imgs";
import { styled } from "styled-components";

const BaseHeaderButton = styled.button`
  background-color: black;
  border-style: none;
`;
export function BurgerButton(prop: any) {
  return (
    <BaseHeaderButton onClick={prop.handler}>
      <BurguerLogo />
    </BaseHeaderButton>
  );
}

const BaseFooterButton = styled.button`
  font-family: "Inter", "sans-serif";
  color: white;
  font-size: 25px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  text-decoration-skip-ink: none;
  background-color: black;
  border-style: none;
  align-items: center;
  display: flex;
`;
export function FooterButton(prop: any) {
  return (
    <BaseFooterButton onClick={prop.handler}>{prop.children}</BaseFooterButton>
  );
}

const BaseMenuButton = styled.button`
  font-family: "Inter", "sans-serif";
  font-size: 32px;
  font-weight: 700;
  line-height: 38.73px;
  text-align: center;
  background-color: black;
  color: white;
  border-style: none;
  padding-bottom: 55px;
`;

export function MenuButton(prop: any) {
  return (
    <BaseMenuButton onClick={prop.handler}>{prop.children}</BaseMenuButton>
  );
}

const CloseButton = styled(BaseMenuButton)`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export function CloseMenuButton(prop: any) {
  return (
    <CloseButton onClick={prop.handler}>
      <CloseLogo />
    </CloseButton>
  );
}

const SearchBtn = styled.button`
  background-color: #4f7cac;
  color: white;
  width: 100%;
  height: 37px;
  border-radius: 8px;
  border-style: none;
  font-size: 25px;
`;

export function SearchButton(prop: any) {
  return (
    <SearchBtn type="submit" onClick={prop.handler}>
      {prop.children}
    </SearchBtn>
  );
}
const SearchBtn2 = styled(SearchBtn)`
  background-color: #ffc700;
  color: black;
  width: 100%;
  font-size: 25px;
`;
export function SearchButton2(prop: any) {
  return (
    <SearchBtn2 type="submit" onClick={prop.handler}>
      {prop.children}
    </SearchBtn2>
  );
}
