import { updateAddress, updateUser } from "@/lib/api";
import Form from "next/form";
import { userData } from "@/lib/api";
export function Profile() {
  const formHandler = (e: any) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const address = e.target.address.value;
    const userAge = e.target.userAge.value;
    const phoneNumber = e.target.tel.value;
    const additionalUserData = {
      firstName,
      lastName,
      userAge,
      phoneNumber,
    };
    updateUser(additionalUserData as userData);
    updateAddress(address);
  };
  return (
    <div className="bg-white px-5 py-4 h-[797px]">
      <div className="font-bold text-4xl py-3">Perfil</div>
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
          className="text-3xl font-bold h-14 w-full bg-[#d14e6d] rounded-lg"
          type="submit"
        >
          Guardar
        </button>
      </Form>
    </div>
  );
}
