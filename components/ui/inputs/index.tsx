export function InputBody(props: any) {
  return (
    <input
      className="flex border-solid border-black border-[5px] rounded-lg h-10 w-full text-center text-gray-500 text-[20px]"
      {...props}
    />
  );
}

export function InputBody2(props: any) {
  return (
    <input
      className="text-white bg-black border-solid border-white border-[5px] text-center flex rounded-lg h-10 w-full text-[20px]"
      {...props}
    />
  );
}

export function InputSignUp(props: any) {
  return (
    <input
      className="text-black bg-white border-solid border-black border-[5px] text-center flex rounded-lg h-10 w-full text-[20px]"
      {...props}
    />
  );
}

export function SignUpFormLabel(props: any) {
  return <label className="text-[20px] text-start" {...props} />;
}

export function FormDiv(props: any) {
  return <div className=" text-[20px]" {...props} />;
}
