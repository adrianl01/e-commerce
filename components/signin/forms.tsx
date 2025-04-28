import { SignUpCodeForm, SignUpForm } from "@/ui/forms";
import { SignUpDiv } from "./style";

export function SignUp(props: any) {
  const setData = props.setter;
  return (
    <SignUpDiv>
      <h4 className="text-4xl text-left font-bold">Log In</h4>
      <SignUpForm setter={setData} />
    </SignUpDiv>
  );
}
export function SignUpCode() {
  return (
    <SignUpDiv>
      <h4 className="text-4xl text-left font-bold">Code</h4>
      <SignUpCodeForm />
    </SignUpDiv>
  );
}
