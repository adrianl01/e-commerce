'use client';
import { useRouter } from 'next/navigation';
import { AnimatedButton } from '../buttons';
import { FormDiv, InputSignUp } from '../inputs/index';

interface HomeFormProps {
  className?: string;
  classInput?: string;
  classButton?: string;
  placeholder?: string;
}

export function HomeForm({ className, classButton, classInput, placeholder }: HomeFormProps) {
  const router = useRouter();
  const handlerHomeForm = (e: any) => {
    e.preventDefault();
    const q = e.target.query.value as string;
    if (q === '') {
      throw console.log({ message: 'search vacío' });
    } else if (q.length >= 3) {
      router.push('/search?query=' + q + '&offset=0');
    }
  };
  return (
    <form className={className} action="" onSubmit={handlerHomeForm}>
      <input className={classInput} name="query" placeholder={placeholder ? placeholder : 'Click here to search'} />
      <AnimatedButton type="submit" buttonText="Search" className={classButton} />
    </form>
  );
}

interface FormProps {
  className?: string;
}

interface FormProps {
  className?: string;
}

export function SearchForm({ className }: FormProps) {
  const router = useRouter();

  const handlerSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.elements.namedItem('query') as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?query=${encodeURIComponent(q)}&offset=0`);
  };

  return (
    <form onSubmit={handlerSearchForm} className={`flex w-full gap-3 md:hidden p-4 ${className ?? ''}`}>
      <input
        name="query"
        type="text"
        placeholder="Search chairs, lamps, rugs..."
        className="h-12 flex-1 rounded-xl border border-[#C4AA8A] bg-white px-4 text-[14px] text-[#3B2A1A] outline-none transition-colors
          placeholder:text-[#B0957A] focus:border-[#7A5C3F]"
      />

      <button
        type="submit"
        className="rounded-xl bg-[#7A5C3F] px-6 text-[14px] font-medium text-[#FAF7F2] transition-colors hover:bg-[#5E4530]"
      >
        Search
      </button>
    </form>
  );
}

interface SignUpCodeFormProps {
  setCode: (code: number) => void;
}

export function SignUpCodeForm({ setCode }: SignUpCodeFormProps) {
  console.log('SignUpCodeForm rendered');
  const router = useRouter();
  const SignUpCodeHandler = (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;
    const numberCode = parseInt(code, 10);
    console.log('Code entered:', numberCode);
    setCode(numberCode);
  };
  return (
    <form className="signUpFormDiv" action="" onSubmit={SignUpCodeHandler}>
      <InputSignUp name="code" />
      <FormDiv>We've sent you a code via email</FormDiv>
      <AnimatedButton type="submit" buttonText="Sign In" />
    </form>
  );
}
