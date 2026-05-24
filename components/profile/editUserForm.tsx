"use client";

interface Props {
  handler: (e: React.SubmitEvent<HTMLFormElement>) => void;
  cancel: () => void;
}

export function EditForm({ handler, cancel }: Props) {
  return (
    <form
      onSubmit={handler}
      className="flex flex-col gap-6"
    >
      {[
        ["Nombre", "firstName", "text"],
        ["Apellido", "lastName", "text"],
        ["Edad", "userAge", "number"],
        ["Dirección", "address", "text"],
        ["Teléfono", "tel", "tel"],
      ].map(([label, name, type]) => (
        <div key={name} className="flex flex-col gap-2">
          <label
            htmlFor={name}
            className="text-[14px] font-medium text-[#6B5240]"
          >
            {label}
          </label>

          <input
            id={name}
            name={name}
            type={type}
            className="h-12 rounded-xl border border-[#C4AA8A] bg-white px-4 text-[15px] text-[#3B2A1A] outline-none transition-colors focus:border-[#7A5C3F]"
          />
        </div>
      ))}

      <div className="mt-4 flex gap-4">
        <button
          type="submit"
          className="rounded-xl bg-[#7A5C3F] px-6 py-3 text-[14px] font-medium text-[#FAF7F2] transition-colors hover:bg-[#5E4530]"
        >
          Save changes
        </button>

        <button
          type="button"
          onClick={cancel}
          className="rounded-xl border border-[#C4AA8A] px-6 py-3 text-[14px] font-medium text-[#7A5C3F] transition-colors hover:bg-[#EDE4D6]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}