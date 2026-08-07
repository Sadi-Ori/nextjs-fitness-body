import React from 'react';
import Slider from 'react-slick';

export default function ReviewSlider({ reviews = [] }) {
  if (!reviews || !reviews.length) return null;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {reviews.map((item, idx) => (
          <div key={idx} className="p-3">
            <div className="bg-white rounded-lg p-6 md:h-72 flex flex-col justify-between border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="mb-4 text-gray-600 text-base leading-relaxed">
                “{item.text}”
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border border-gray-200"
                />
                <div>
                  <p className="font-bold text-gray-900 text-base">{item.name}</p>
                  <p className="text-sm text-pink-600 font-semibold">{item.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
