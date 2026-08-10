import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../lib/AuthContext';

export default function Navbar() {
  const { user, Logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BMI CALCULATOR', path: '/bmi' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contactus' },
  ];

  return (
    <header
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #eeeeee',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          width: '100%',
          minHeight: '72px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 50px',
          boxSizing: 'border-box',
        }}
      >

        {/* =========================
            BODYBOOST LOGO
        ========================== */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          {/* Mobile hamburger */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            ☰
          </button>

          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src="/logo.webp"
              alt="BodyBoost"
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
                transform: 'rotate(6deg)',
              }}
            />

            <span
              style={{
                marginLeft: '4px',
                fontSize: '34px',
                fontWeight: '700',
                fontStyle: 'italic',
                color: '#f22f3e',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              BODYBOOST
            </span>
          </Link>
        </div>


        {/* =========================
            NAVIGATION MENU
        ========================== */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '40px',
            marginRight: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
              whiteSpace: 'nowrap',
            }}
          >

            {navLinks.map((link) => {
              const active = router.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{
                    textDecoration: 'none',
                    color: active ? '#ff2939' : '#111111',
                    fontSize: '17px',
                    fontWeight: active ? '700' : '600',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    fontFamily: 'Bebas Neue, sans-serif',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ff2939';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active
                      ? '#ff2939'
                      : '#111111';
                  }}
                >
                  {link.name}
                </Link>
              );
            })}

          </div>
        </div>


        {/* =========================
            BECOME A MEMBER
        ========================== */}
        <div
          style={{
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleAuthAction}
            style={{
              backgroundColor: '#ff2939',
              color: '#ffffff',
              border: 'none',
              padding: '13px 25px',
              minWidth: '193px',
              fontSize: '16px',
              fontWeight: '600',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Bebas Neue, sans-serif',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#222222';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff2939';
            }}
          >
            {user ? 'LOG OUT' : 'BECOME A MEMBER'}
          </button>
        </div>

      </nav>


      {/* =========================
          MOBILE MENU
      ========================== */}
      {dropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #eeeeee',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            padding: '20px',
          }}
        >
          {navLinks.map((link) => (
            <div key={link.path} style={{ marginBottom: '15px' }}>
              <Link
                href={link.path}
                onClick={() => setDropdownOpen(false)}
                style={{
                  color:
                    router.pathname === link.path
                      ? '#ff2939'
                      : '#111111',
                  textDecoration: 'none',
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                {link.name}
              </Link>
            </div>
          ))}

          <button
            onClick={() => {
              setDropdownOpen(false);
              handleAuthAction();
            }}
            style={{
              backgroundColor: '#ff2939',
              color: '#ffffff',
              border: 'none',
              padding: '12px 20px',
              cursor: 'pointer',
              fontSize: '16px',
              width: '200px',
            }}
          >
            {user ? 'LOG OUT' : 'BECOME A MEMBER'}
          </button>
        </div>
      )}

    </header>
  );
}