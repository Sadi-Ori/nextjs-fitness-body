import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../lib/AuthContext';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const { user, Logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  const handleAuthAction = () => {
    if (user) {
      Logout();
      router.push('/signin');
    } else {
      router.push('/signin');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'BMI Calculator', path: '/bmi' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contactus' },
  ];

  if (user) {
    navLinks.push({ name: 'My Profile', path: '/myprofile' });
  }

  const renderNavItems = (
    <>
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.path}
            onClick={() => setDropdownOpen(false)}
            className={router.pathname === link.path ? 'text-red-500 font-bold' : ''}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="navbar container mx-auto">
        
        {/* Navbar Start: Hamburger Dropdown & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-amber-50 border rounded-box z-1 mt-3 w-52 p-4 md:pb-2 pb-0 shadow bebas-neue text-xl space-y-1"
              >
                {renderNavItems}
                <li>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      handleAuthAction();
                    }}
                    className="pl-7 py-2 bg-red-500 text-white w-3/4 mt-3 md:hidden hover:bg-gray-800 text-left rounded"
                  >
                    {user ? 'LOG OUT' : 'BECOME A MEMBER'}
                  </button>
                </li>
              </ul>
            )}
          </div>

          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="BodyBoost" className="w-13 rotate-6" />
            <span className="text-4xl mt-2.5 bebas-neue text-red-500 italic ml-0">
              BodyBoost
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bebas-neue text-xl space-x-2">
            {renderNavItems}
          </ul>
        </div>

        {/* Navbar End: Cart Icon, User Avatar & Action Button */}
        <div className="navbar-end gap-4">
          
          {/* Shopping Cart Option Icon */}
          <button
            onClick={() => alert("Shopping Cart: Select fitness packages from Services to enroll.")}
            className="btn btn-ghost btn-circle relative text-gray-700 hover:text-red-500"
            title="Cart Options"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="badge badge-sm badge-error text-white absolute -top-1 -right-1 font-bold">
              {cartCount}
            </span>
          </button>

          {user && (
            <Link href="/myprofile" title="My Profile">
              <img
                src={
                  user.photoURL && user.photoURL !== 'N/A'
                    ? user.photoURL
                    : 'https://i.ibb.co.com/MyLkVgN0/Screenshot-2025-05-06-001159.png'
                }
                alt="User Avatar"
                className="w-12 h-12 rounded-full cursor-pointer object-cover border-2 border-red-500"
              />
            </Link>
          )}

          <button
            onClick={handleAuthAction}
            className="bg-red-500 text-white px-6 py-2 md:mr-2 hidden md:flex hover:bg-gray-800 bebas-neue text-xl cursor-pointer rounded transition-colors"
          >
            {user ? 'LOG OUT' : 'BECOME A MEMBER'}
          </button>
        </div>

      </div>
    </div>
  );
}
