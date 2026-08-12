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
        card
        h-full
        bg-base-100
        shadow-sm
        transform
        transition
        duration-500
        hover:scale-105
        hover:shadow-xl
        ease-in-out
        border
        border-gray-100
        rounded-2xl
        overflow-hidden
      "
    >

      <div className="card-body flex justify-between flex-col p-6">

        {/* IMAGE + BASIC INFO */}
        <div className="space-y-3">

          {imgSrc && (
            <img
              src={imgSrc}
              alt={name}
              className="h-52 w-full rounded-lg object-cover"
            />
          )}

          {/* Category */}
          <div>
            <span className="badge badge-md bg-amber-400 text-white border-none font-semibold px-3 py-1 rounded">
              {category}
            </span>
          </div>

          {/* Name + Price */}
          <div className="flex justify-between items-start gap-3">

            <h2 className="text-2xl font-bold text-gray-900">
              {name}
            </h2>

            <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
              {price}/{frequency}
            </span>

          </div>

        </div>


        {/*BENEFITS*/}
        <div className="my-4">

          <ul className="mt-3 flex flex-col gap-2">

            {subscription_benefits.map((benefit, idx) => (

              <li
                key={idx}
                className="text-gray-500 text-sm flex gap-2 items-center"
              >

                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />

                <span>
                  {benefit}
                </span>

              </li>

            ))}

          </ul>

        </div>


        {/*VIEW DETAILS BUTTON*/}
        <div className="mt-auto pt-2">

          <Link
            href={`/serviceDetails/${id}`}
            className="
              btn
              bg-red-500
              hover:bg-gray-800
              text-white
              font-bold
              w-full
              text-center
              py-2.5
              rounded-lg
              block
              transition-colors
              tracking-wide
            "
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}