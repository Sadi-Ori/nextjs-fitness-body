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
    <div className="card bg-base-100 shadow-sm transform transition duration-500 hover:scale-105 hover:shadow-xl ease-in-out border border-gray-100 rounded-2xl overflow-hidden">
      <div className="card-body flex justify-between flex-col p-6">
        <div className="space-y-3">
          <img src={imgSrc} alt={name} className="h-52 w-full rounded-lg object-cover" />
          <div>
            <span className="badge badge-md bg-amber-400 text-white border-none font-semibold px-3 py-1 rounded">
              {category}
            </span>
          </div>
          <div className="flex justify-between items-baseline gap-2">
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <span className="text-sm font-bold text-gray-700">{price}/{frequency}</span>
          </div>
        </div>

        <div className="my-4">
          <ul className="mt-3 flex flex-col gap-2 text-xs">
            {subscription_benefits.map((m, idx) => (
              <li key={idx} className="text-gray-500 text-sm flex gap-2 items-center">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          <Link
            href={`/serviceDetails/${id}`}
            className="btn bg-red-500 hover:bg-gray-800 text-white font-bold w-full text-center py-2.5 rounded-lg block transition-colors tracking-wide"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
