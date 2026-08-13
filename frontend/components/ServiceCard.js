import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function ServiceCard({ service }) {
  if (!service) return null;

  const {
    id,
    thumbnail,
    image,
    name,
    price,
    category,
    frequency,
    subscription_benefits = [],
  } = service;

  const imgSrc = thumbnail || image;

  return (
    <div
      className="
        h-full
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        border
        border-gray-100
        rounded-2xl
        overflow-hidden
      "
    >
      {/* IMAGE */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={name}
          className="h-44 w-full object-cover"
        />
      )}

      {/* CARD CONTENT */}
      <div className="p-5 flex flex-col h-[300px]">

        {/* CATEGORY */}
        <div className="mb-2">
          <span
            className="
              inline-block
              bg-amber-400
              text-white
              text-xs
              font-semibold
              px-3
              py-1
              rounded
            "
          >
            {category}
          </span>
        </div>

        {/* NAME + PRICE */}
        <div className="flex justify-between items-start gap-3 mb-4">
          <h2 className="text-xl font-bold text-gray-900 leading-tight">
            {name}
          </h2>

          <span className="text-xs font-bold text-gray-900 whitespace-nowrap">
            {price}/{frequency}
          </span>
        </div>

        {/* BENEFITS */}
        <ul className="flex flex-col gap-2 mb-5">
          {subscription_benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="
                text-gray-500
                text-sm
                flex
                gap-2
                items-center
              "
            >
              <Check
                className="
                  w-4
                  h-4
                  text-gray-500
                  flex-shrink-0
                "
              />

              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <div className="mt-auto">
          <Link
            href={`/serviceDetails/${id}`}
            className="
              bg-red-500
              hover:bg-red-600
              text-white
              font-bold
              w-full
              text-center
              py-2.5
              rounded-lg
              block
              transition-colors
            "
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}