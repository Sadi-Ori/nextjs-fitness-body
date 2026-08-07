import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AuthContext } from '../lib/AuthContext';

export default function MyProfile() {
  const { user, UpdateUserProfile, loading } = useContext(AuthContext);
  const router = useRouter();

  const [newName, setNewName] = useState('');
  const [newPhoto, setNewPhoto] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    } else if (user) {
      setNewName(user.displayName || '');
      setNewPhoto(user.photoURL || '');
    }
  }, [user, loading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await UpdateUserProfile(newName, newPhoto);
    setUpdating(false);
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>My Profile || BodyBoost</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 py-16">
        <div className="w-full max-w-2xl bg-[#1e293b] p-6 sm:p-10 rounded-xl shadow-xl border border-gray-700 space-y-8">
          <h2 className="text-3xl font-bold text-center">My Profile</h2>

          <div className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-600 pb-6">
            <img
              src={user.photoURL || 'https://i.ibb.co.com/MyLkVgN0/Screenshot-2025-05-06-001159.png'}
              alt="Profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-purple-500 shadow-md"
            />

            <div className="text-left w-full space-y-2 break-words text-gray-200">
              <p>
                <span className="font-semibold text-white">Name:</span> {user.displayName || 'N/A'}
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span> {user.email || 'N/A'}
              </p>
              <p className="break-all text-xs text-gray-400">
                <span className="font-semibold text-white text-sm">Photo URL:</span> {user.photoURL || 'N/A'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">New Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new name"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">New Photo URL</label>
              <input
                type="text"
                value={newPhoto}
                onChange={(e) => setNewPhoto(e.target.value)}
                placeholder="Enter new photo URL"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={updating}
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-3 rounded-lg text-lg font-semibold shadow-md"
            >
              {updating ? 'Updating...' : 'Update Profile'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
