'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { saveEmail } from '@/lib';
import { verifyCode } from '@/lib/services/auth';
type Setter = (state: 'email' | 'code' | 'error') => void;

const cardClass = 'w-full max-w-[420px] rounded-2xl border border-[#D9CFC0] bg-white p-8';

export function SignUp({ setter }: { setter: Setter }) {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();

    if (!email) {
      setError('Email is required');
      return;
    }

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      setError('Invalid email');
      return;
    }

    try {
      setLoading(true);
      setError('');

      saveEmail(email);

      setter('code');
    } catch {
      setter('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cardClass}>
      <div className="mb-8">
        <h1 className="text-[36px] font-medium text-[#3B2A1A]">Log in</h1>

        <p className="mt-2 text-[15px] text-[#9A7E62]">Enter your email to continue.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium text-[#6B5240]">Email</label>

          <input
            name="email"
            type="email"
            className="h-12 rounded-xl border border-[#C4AA8A] px-4 outline-none transition-colors focus:border-[#7A5C3F]"
            placeholder="you@example.com"
          />
        </div>

        {error && <div className="text-sm text-red-500">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#7A5C3F] py-3 text-[14px] font-medium text-[#FAF7F2] transition-colors hover:bg-[#5E4530] disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Continue'}
        </button>
      </form>

      <div className="my-6 text-center text-sm text-[#9A7E62]">Or</div>

      <button
        type="button"
        onClick={() =>
          signIn('google', {
            callbackUrl: '/',
            prompt: 'select_account'
          })
        }
        className="w-full rounded-xl border border-[#C4AA8A] py-3 text-[14px] font-medium text-[#7A5C3F] transition-colors hover:bg-[#EDE4D6]"
      >
        Continue with Google
      </button>
    </div>
  );
}

export function SignUpCode() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const rawCode = (form.elements.namedItem('code') as HTMLInputElement).value;

    const code = Number(rawCode);

    if (!code) {
      setError('Invalid code');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const res = await verifyCode(code);

      if (!res) {
        setError('Invalid code');
        return;
      }

      router.push('/');
    } catch {
      setError('Invalid or expired code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cardClass}>
      <div className="mb-8">
        <h1 className="text-[36px] font-medium text-[#3B2A1A]">Verification code</h1>

        <p className="mt-2 text-[15px] text-[#9A7E62]">We sent a code to your email.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          name="code"
          type="text"
          placeholder="123456"
          className="h-12 rounded-xl border border-[#C4AA8A] px-4 text-center text-[20px] tracking-[4px] outline-none transition-colors focus:border-[#7A5C3F]"
        />

        {error && <div className="text-sm text-red-500">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#7A5C3F] py-3 text-[14px] font-medium text-[#FAF7F2] transition-colors hover:bg-[#5E4530] disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
