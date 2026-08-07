import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../lib/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

export default function Signup() {
  const { CreateUser } = useContext(AuthContext);
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const res = await CreateUser(email, password, name, photo);
    if (res.success) {
      router.push('/');
    } else {
      setError(res.error || 'Registration failed');
    }
    setSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Sign Up || BodyBoost</title>
      </Head>

      <div className="min-h-screen bg-[#0F172A] flex items-center flex-col justify-center px-4 sm:px-6 lg:px-8 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-[#0F172A] p-6 sm:p-8 rounded-t-xl w-full max-w-md border border-b-0 border-gray-700 space-y-4"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
            Sign Up
          </h2>

          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-[#1E293B] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            />
          </div>

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
              className="w-full px-4 py-2 rounded-md bg-[#1E293B] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Profile Photo URL"
              className="w-full px-4 py-2 rounded-md bg-[#1E293B] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
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
              className="w-full px-4 py-2 rounded-md bg-[#1E293B] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300 shadow-md text-base mt-2"
          >
            {submitting ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-b-xl w-full max-w-md border border-t-0 border-gray-700">
          <div className="my-4 flex items-center justify-between">
            <hr className="border-gray-700 w-1/4" />
            <span className="text-gray-400 text-sm">or sign up with</span>
            <hr className="border-gray-700 w-1/4" />
          </div>

          <div className="flex justify-center gap-6 text-white text-2xl">
            <button
              type="button"
              onClick={() => alert('Social sign in demo')}
              className="hover:text-violet-500 transition-colors duration-300 p-2 rounded-full bg-slate-800"
            >
              G+
            </button>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/signin" className="text-white font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
