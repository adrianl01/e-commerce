import Form from "next/form";
export function Profile() {
  const formHandler = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.address.value;
    const tel = e.target.tel.value;
    console.log(name, address, tel);
  };
  return (
    <div className="bg-white px-5 py-4 h-[577px]">
      <div className="font-bold text-4xl py-3">Perfil</div>
      <Form
        className="flex flex-col h-full gap-8 text-2xl"
        onSubmit={formHandler}
        action={""}
      >
        <fieldset className=" px-0 py-0 mx-0">
          <label className="text-2xl" htmlFor="name">
            Nombre Completo
          </label>
          <input
            className="h-16 w-full border-solid border-black border-4 rounded-lg"
            type="text"
            name="name"
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
          className="text-3xl font-bold h-14 w-full bg-yellow-400 rounded-lg"
          type="submit"
        >
          Guardar
        </button>
      </Form>
    </div>
  );
}
