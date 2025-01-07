import styled from "styled-components";

export const InputBody = styled.input`
  display: flex;
  border: solid 5px black;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 20px;
`;

export const InputBody2 = styled(InputBody)`
  color: white;
  background-color: black;
  border: solid 5px white;
  text-align: center;
`;

export const InputSignUp = styled(InputBody2)`
  color: black;
  background-color: white;
  border: solid 5px black;
`;

export const SignUpFormLabel = styled.label`
  font-size: 25px;
  text-align: start;
`;

export const FormDiv = styled.div`
  font-size: 20px;
`;
