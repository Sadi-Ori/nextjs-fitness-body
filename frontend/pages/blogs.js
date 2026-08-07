import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import api from '../lib/api';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await api.get('/blogs/');
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
      </div>
    );
  }

  const featured = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <>
      <Head>
        <title>Blogs || BodyBoost</title>
      </Head>

      <section className="bg-gray-100 text-gray-800 py-12 min-h-screen">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          
          {featured && (
            <a
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50 rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={featured.img}
                alt={featured.title}
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-gray-900">
                  {featured.title}
                </h3>
                <span className="text-xs text-gray-600 block">{featured.date}</span>
                <p className="text-gray-700 text-sm leading-relaxed">{featured.desc}</p>
              </div>
            </a>
          )}

          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherBlogs.map((s, c) => (
              <a
                key={c}
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 rounded-lg shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <img
                  className="object-cover w-full rounded h-44 bg-gray-500"
                  src={s.img}
                  alt={s.title}
                />
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gray-900">
                      {s.title}
                    </h3>
                    <span className="text-xs text-gray-600 block mt-1">{s.date}</span>
                    <p className="text-gray-700 text-sm mt-2">{s.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
