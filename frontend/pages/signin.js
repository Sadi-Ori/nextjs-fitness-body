import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../lib/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

export default function Signin() {
  const { LoginUser } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const res = await LoginUser(email, password);
    if (res.success) {
      router.push('/');
    } else {
      setError(res.error || 'Invalid credentials');
    }
    setSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Login || BodyBoost</title>
      </Head>

      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-[#0F172A] p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700 space-y-5"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center tracking-tight">
            Login
          </h2>

          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full px-4 py-2.5 rounded-md bg-[#1E293B] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            />
          </div>

          <div className="relative">
            <label className="block text-white text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-2.5 rounded-md bg-[#1E293B] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <div className="mt-2 text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-violet-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300 shadow-md text-base"
          >
            {submitting ? 'Logging in...' : 'Login'}
          </button>

          <div className="my-6 flex items-center justify-between">
            <hr className="border-gray-700 w-1/4" />
            <span className="text-gray-400 text-sm">or login with</span>
            <hr className="border-gray-700 w-1/4" />
          </div>

          <div className="flex justify-center gap-6 text-white text-2xl">
            <button
              type="button"
              onClick={() => alert('Social sign in with Google demo')}
              className="hover:text-violet-500 transition-colors duration-300 p-2 rounded-full bg-slate-800"
            >
              G+
            </button>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-white font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
