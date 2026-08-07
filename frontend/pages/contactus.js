import React, { useState, useContext } from 'react';
import Head from 'next/head';
import api from '../lib/api';
import { AuthContext } from '../lib/AuthContext';

export default function ContactUs() {
  const { showToast } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contact/', { name, email, subject, message });
      if (showToast) showToast('Message sent successfully!', 'success');
      else alert('Message sent successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error(err);
      if (showToast) showToast('Failed to send message.', 'error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us || BodyBoost</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 py-10">
        <div className="w-full max-w-2xl bg-[#1e293b] p-6 sm:p-10 rounded-xl shadow-md border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-2 rounded-lg text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
