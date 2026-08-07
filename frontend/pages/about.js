import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import api from '../lib/api';
import ReviewSlider from '../components/ReviewSlider';

export default function About() {
  const [trainers, setTrainers] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [trainersRes, reviewsRes] = await Promise.all([
          api.get('/trainers/'),
          api.get('/reviews/')
        ]);
        setTrainers(trainersRes.data);
        setReviews(reviewsRes.data);
      } catch (err) {
        console.error("Failed to fetch about data", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>About || BodyBoost</title>
      </Head>

      <div className="container mx-auto">
        {/* Why Join BodyBoost (w3) */}
        <div>
          <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center mt-30 italic">
            Why Join <span className="text-red-500">BodyBoost</span>
          </h1>
          <p className="text-center mt-3 w-8/10 mx-auto mb-3 text-sm md:text-2xl text-gray-400">
            Kick your feet up! With a gym designed around you, we think <br /> you'll love it here.
          </p>

          <div className="flex flex-col md:flex-row text-center justify-center items-center gap-5 mx-auto lg:gap-8 mt-10">
            <div className="px-10 py-10 w-[300px] md:w-[400px] space-y-3 transform transition duration-300 hover:scale-105" data-aos="fade-right">
              <img className="mx-auto" src="/assets/img1-D-w3oOni.png" alt="" />
              <h1 className="text-3xl italic bebas-neue">
                Free Fitness <br /> Training
              </h1>
              <p className="text-gray-600 text-sm">
                Over 50 group training sessions per week. There is no one type or way in our diverse community. Come as you are!
              </p>
            </div>

            <div className="px-10 py-10 w-[300px] md:w-[400px] space-y-3 transform transition duration-300 hover:scale-105" data-aos="fade-up">
              <img className="mx-auto" src="/assets/img2-BJzvBi4v.png" alt="" />
              <h1 className="text-3xl italic bebas-neue">
                Tons of Cardio & <br /> Strength
              </h1>
              <p className="text-gray-600 text-sm">
                Over 50 group training sessions per week. There is no one type or way in our diverse community. Come as you are!
              </p>
            </div>

            <div className="px-10 py-10 w-[300px] md:w-[400px] space-y-3 transform transition duration-300 hover:scale-105" data-aos="fade-left">
              <img className="mx-auto" src="/assets/img3-B4NX7bHp.png" alt="" />
              <h1 className="text-3xl italic bebas-neue">
                No Commitment <br /> Memberships
              </h1>
              <p className="text-gray-600 text-sm">
                Over 50 group training sessions per week. There is no one type or way in our diverse community. Come as you are!
              </p>
            </div>
          </div>
        </div>

        {/* Fitness Trainer (W3) */}
        <div>
          <div className="mb-20">
            <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center mt-30 italic">
              Fitness <span className="text-red-500">Trainer</span>
            </h1>
            <p className="text-center mt-3 w-8/10 mx-auto mb-3 text-sm md:text-2xl text-gray-400">
              Train with experts who guide your fitness <br /> journey, so you can achieve the results you've always wanted.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {trainers.map((trainer, idx) => (
              <div
                key={trainer.id || idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                  data-aos="fade-up-right"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold italic text-gray-800 uppercase">
                    {trainer.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {trainer.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Happy People Reviews (J3) */}
        <div className="mb-20">
          <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center mt-30 italic mb-10">
            Happy People <span className="text-red-500">Reviews</span>
          </h1>
          <ReviewSlider reviews={reviews} />
        </div>
      </div>
    </>
  );
}
