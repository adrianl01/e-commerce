import styled from "styled-components";

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e75a7c;
  width: 328px;
  height: 322px;
  border-radius: 8px;
  border: solid black 4px;
  color: black;
`;
export const BoxTitlePriceDiv = styled.div`
  padding: 10px;
  height: 30%;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
  align-items: center;
`;
