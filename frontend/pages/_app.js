import '../styles/globals.css'
import '../styles/live_site.css'
import Head from 'next/head'
import { AuthProvider, AuthContext } from '../lib/AuthContext'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer'
import { useContext } from 'react'

function ToastNotification() {
  const { toast } = useContext(AuthContext);

  if (!toast.show) return null;

  const bgColors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  };

  return (
    <div className={`fixed bottom-6 right-6 ${bgColors[toast.type] || 'bg-gray-800'} text-white px-6 py-3 rounded-xl shadow-2xl z-50 transition-all duration-300 transform translate-y-0 font-medium`}>
      {toast.message}
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>BodyBoost</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className="font-sans bg-white text-gray-900 min-h-screen flex flex-col justify-between">
      <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
        <ToastNotification />
      </div>
    </AuthProvider>
  );
}
