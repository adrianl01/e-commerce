import { SignUp, SignUpCode } from "./forms";
import { useState } from "react";

export function SignIn() {
  const [data, setData] = useState(false);
  return (
    <div>
      {data ? (
        <div className="md:flex justify-center">
          <SignUpCode />
        </div>
      ) : (
        <div className="md:flex justify-center">
          <SignUp setter={setData} />
        </div>
      )}
    </div>
  );
}
