import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fffbed] text-[#17243a]">

      {/* FOOTER CONTENT */}
      <div className="w-full px-5 pt-16 pb-5">

        <div className="flex items-start justify-between">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center"
            >
              <img
                src="/logo.webp"
                alt="BodyBoost"
                className="w-[58px] h-[58px] object-contain"
              />

              <span className="ml-2 text-[36px] text-red-500 bebas-neue italic leading-none">
                BODYBOOST
              </span>
            </Link>
          </div>


          {/* PRODUCT */}
          <div className="w-[180px]">
            <h3 className="text-[15px] font-normal italic mb-3">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-[4px]">

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                Features
              </Link>

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                Integrations
              </Link>

              <Link
                href="/services"
                className="text-[13px] italic hover:text-red-500"
              >
                Pricing
              </Link>

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                FAQ
              </Link>

            </div>
          </div>


          {/* COMPANY */}
          <div className="w-[180px]">
            <h3 className="text-[15px] font-normal italic mb-3">
              COMPANY
            </h3>

            <div className="flex flex-col gap-[4px]">

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                Privacy
              </Link>

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                Terms of Service
              </Link>

            </div>
          </div>


          {/* DEVELOPERS */}
          <div className="w-[180px]">
            <h3 className="text-[15px] font-normal italic mb-3">
              DEVELOPERS
            </h3>

            <div className="flex flex-col gap-[4px]">

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                Public API
              </Link>

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                Documentation
              </Link>

              <Link
                href="/"
                className="text-[13px] italic hover:text-red-500"
              >
                Guides
              </Link>

            </div>
          </div>


          {/* SOCIAL MEDIA */}
          <div className="w-[180px]">
            <h3 className="text-[15px] font-normal italic mb-3">
              SOCIAL MEDIA
            </h3>

            <div className="flex items-center gap-6">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.689 4.533-4.689 1.312 0 2.686.235 2.686.235v2.965h-1.514c-1.491 0-1.956.927-1.956 1.878v2.255h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>


              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.64 3.161a4.822 4.822 0 00-.666 2.475 4.919 4.919 0 002.188 4.096 4.903 4.903 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417A9.869 9.869 0 011.328 19.61c-.41 0-.819-.023-1.228-.07a13.945 13.945 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>


              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.5.184.957.478 1.32.858.38.363.674.82.858 1.32.166.422.361 1.057.415 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.415 2.227a3.97 3.97 0 01-2.178 2.178c-.422.166-1.057.361-2.227.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.415a3.97 3.97 0 01-2.178-2.178c-.166-.422-.361-1.057-.415-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.415-2.227.184-.5.478-.957.858-1.32.363-.38.82-.674 1.32-.858.422-.166 1.057-.361 2.227-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.908.333 4.15.63a6.62 6.62 0 00-2.39 1.553A6.62 6.62 0 00.207 4.573C-.09 5.331-.293 6.198-.351 7.476-.409 8.756-.423 9.164-.423 12.423s.014 3.667.072 4.947c.058 1.278.261 2.145.558 2.903a6.62 6.62 0 001.553 2.39 6.62 6.62 0 002.39 1.553c.758.297 1.625.5 2.903.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.278-.058 2.145-.261 2.903-.558a6.62 6.62 0 002.39-1.553 6.62 6.62 0 001.553-2.39c.297-.758.5-1.625.558-2.903.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.145-.558-2.903a6.62 6.62 0 00-1.553-2.39A6.62 6.62 0 0019.85.63C19.092.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                </svg>
              </a>

            </div>
          </div>

        </div>


        {/* DIVIDER */}
        <div className="border-t-2 border-[#17243a] mt-2"></div>


        {/* COPYRIGHT */}
        <div className="text-center pt-2">
          <p className="text-[10px] text-[#17243a]">
            © 2025 Company Co. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}