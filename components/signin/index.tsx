import { SignUpCodeForm, SignUpForm } from "@/ui/forms";
import { SignUpDiv } from "./style";

export function SignUp() {
  return (
    <SignUpDiv>
      <h4 className="text-4xl text-left font-bold">Ingresar</h4>
      <SignUpForm />
    </SignUpDiv>
  );
}
export function SignUpCode() {
  return (
    <SignUpDiv>
      <h4 className="text-4xl text-left font-bold">Código</h4>
      <SignUpCodeForm />
    </SignUpDiv>
  );
}
