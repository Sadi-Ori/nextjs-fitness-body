import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AuthContext } from '../lib/AuthContext';

export default function ForgotPassword() {
  const { showToast } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Password reset link sent to your email!', 'info');
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Forgot Password || BodyBoost</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 py-12">
        <div className="max-w-md w-full bg-[#1e293b] p-8 rounded-xl text-white shadow-xl border border-gray-700 space-y-6">
          <h2 className="text-3xl font-bold text-center">Forgot Password</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg text-lg font-semibold shadow-md"
            >
              Reset Password
            </button>
          </form>

          <p className="text-center text-sm text-gray-400">
            Back to login?{' '}
            <Link href="/signin" className="text-purple-400 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
