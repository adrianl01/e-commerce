import { SignUpCodeForm, SignUpForm } from "@/ui/forms";
const classDiv =
  "flex flex-col bg-grey border-black justify-center p-5 md:w-[350px] rounded-lg shadow-lg";
const classH4 = "text-black text-4xl text-left font-bold";
export function SignUp(props: { setter: (data: any) => void }) {
  const setData = props.setter;
  return (
    <div className={classDiv}>
      <h4 className={classH4}>Log In</h4>
      <SignUpForm setter={setData} />
    </div>
  );
}
export function SignUpCode() {
  return (
    <div className={classDiv}>
      <h4 className={classH4}>Code</h4>
      <SignUpCodeForm />
    </div>
  );
}
