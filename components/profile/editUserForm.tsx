import Form from "next/form";

export function EditForm(props: any) {
  const formHandler = props.handler;
  return (
    <Form
      className="flex flex-col h-full gap-8 text-2xl"
      onSubmit={formHandler}
      action={""}
    >
      <fieldset className=" px-0 py-0 mx-0">
        <label className="text-2xl" htmlFor="firstName">
          Nombre/s
        </label>
        <input
          className="h-16 w-full border-solid border-black border-4 rounded-lg"
          type="text"
          name="firstName"
        />
      </fieldset>
      <fieldset className=" px-0 py-0 mx-0">
        <label className="text-2xl" htmlFor="lastName">
          Apellido/s
        </label>
        <input
          className="h-16 w-full border-solid border-black border-4 rounded-lg"
          type="text"
          name="lastName"
        />
      </fieldset>
      <fieldset className=" px-0 py-0 mx-0">
        <label className="text-2xl" htmlFor="userAge">
          Edad
        </label>
        <input
          className="h-16 w-full border-solid border-black border-4 rounded-lg"
          type="number"
          name="userAge"
        />
      </fieldset>
      <fieldset className=" px-0 py-0 mx-0">
        <label className="text-2xl" htmlFor="address">
          Dirección
        </label>
        <input
          className="h-16 w-full border-solid border-black border-4 rounded-lg"
          type="text"
          name="address"
        />
      </fieldset>
      <fieldset className=" px-0 py-0 mx-0">
        <label className="text-2xl" htmlFor="tel">
          Teléfono{" "}
        </label>
        <input
          type="tel"
          className="h-16 w-full border-solid border-black border-4 rounded-lg"
          name="tel"
        />
      </fieldset>
      <button
        className="flex py-4 pl-2 text-3xl bg-red-500 justify-center rounded-lg border-solid border-black border-[5px]"
        type="submit"
      >
        Guardar
      </button>
    </Form>
  );
}
