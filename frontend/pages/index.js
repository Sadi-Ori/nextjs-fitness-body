import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import api from '../lib/api';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import ReviewSlider from '../components/ReviewSlider';

export default function Home() {
  const [services, setServices] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [servicesRes, trainersRes, reviewsRes] = await Promise.all([
          api.get('/services/'),
          api.get('/trainers/'),
          api.get('/reviews/')
        ]);
        setServices(servicesRes.data);
        setTrainers(trainersRes.data);
        setReviews(reviewsRes.data);
      } catch (err) {
        console.error("Failed to load home page data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Home || BodyBoost</title>
      </Head>

      <div>
        {/* Hero Banner Component (p3) */}
        <HeroSlider />

        {/* Container for Home Sections */}
        <div className="container mx-auto px-4">
          
          {/* Why Join BodyBoost Component (w3) */}
          <div className="py-12">
            <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center mt-12 md:mt-20 italic">
              Why Join <span className="text-red-500">BodyBoost</span>
            </h1>
            <p className="text-center mt-3 w-8/10 mx-auto mb-3 text-sm md:text-2xl text-gray-400">
              Kick your feet up! With a gym designed around you, we think <br /> you'll love it here.
            </p>

            <div className="flex flex-col md:flex-row text-center justify-center items-center gap-5 mx-auto lg:gap-8 mt-10">
              <div className="px-10 py-10 w-[300px] md:w-[400px] space-y-3 transform transition duration-300 hover:scale-105 bg-white rounded-xl shadow-sm border border-gray-100" data-aos="fade-right">
                <img className="mx-auto h-24 object-contain" src="/assets/img1-D-w3oOni.png" alt="Free Fitness Training" />
                <h1 className="text-3xl italic bebas-neue text-gray-900">
                  Free Fitness <br /> Training
                </h1>
                <p className="text-gray-600 text-sm">
                  Over 50 group training sessions per week. There is no one type or way in our diverse community. Come as you are!
                </p>
              </div>

              <div className="px-10 py-10 w-[300px] md:w-[400px] space-y-3 transform transition duration-300 hover:scale-105 bg-white rounded-xl shadow-sm border border-gray-100" data-aos="fade-up">
                <img className="mx-auto h-24 object-contain" src="/assets/img2-BJzvBi4v.png" alt="Tons of Cardio & Strength" />
                <h1 className="text-3xl italic bebas-neue text-gray-900">
                  Tons of Cardio & <br /> Strength
                </h1>
                <p className="text-gray-600 text-sm">
                  Over 50 group training sessions per week. There is no one type or way in our diverse community. Come as you are!
                </p>
              </div>

              <div className="px-10 py-10 w-[300px] md:w-[400px] space-y-3 transform transition duration-300 hover:scale-105 bg-white rounded-xl shadow-sm border border-gray-100" data-aos="fade-left">
                <img className="mx-auto h-24 object-contain" src="/assets/img3-B4NX7bHp.png" alt="No Commitment Memberships" />
                <h1 className="text-3xl italic bebas-neue text-gray-900">
                  No Commitment <br /> Memberships
                </h1>
                <p className="text-gray-600 text-sm">
                  Over 50 group training sessions per week. There is no one type or way in our diverse community. Come as you are!
                </p>
              </div>
            </div>
          </div>

          {/* 4 BODY PARTS WORKOUT SECTIONS */}
          <div className="py-16 bg-slate-50 my-12 rounded-3xl p-6 md:p-12 border border-gray-100">
            <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center italic mb-3">
              Targeted Body <span className="text-red-500">Training Programs</span>
            </h1>
            <p className="text-center w-8/10 mx-auto mb-12 text-sm md:text-2xl text-gray-400">
              Specialized exercise routines crafted for peak muscular development and body composition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Div 1: Chest & Arms */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl h-56">
                    <img src="https://i.ibb.co.com/WNvcq0ZL/FIT0001.jpg" alt="Chest & Arms Workout" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded uppercase">Upper Body</span>
                  <h3 className="text-3xl font-bold bebas-neue italic text-gray-900">1. Chest & Arms Hypertrophy</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Build a powerful chest and defined biceps/triceps using compound bench presses, incline dumbbells, cable crossovers, and targeted isolation routines.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/serviceDetails/2" className="btn bg-red-500 hover:bg-gray-800 text-white font-bold w-full text-center py-2.5 rounded-lg block transition-colors bebas-neue text-xl">
                    EXPLORE CHEST & ARMS PROGRAM
                  </Link>
                </div>
              </div>

              {/* Div 2: Back & Shoulders */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl h-56">
                    <img src="https://i.ibb.co.com/XZW4v7k5/De-Watermark-ai-1746478147533.png" alt="Back & Shoulders Workout" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded uppercase">Postural Width</span>
                  <h3 className="text-3xl font-bold bebas-neue italic text-gray-900">2. Back & Shoulder V-Taper</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop impressive back width and deltoid 3D shoulders with heavy lat pulldowns, barbell rows, overhead presses, and lateral raises.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/serviceDetails/2" className="btn bg-red-500 hover:bg-gray-800 text-white font-bold w-full text-center py-2.5 rounded-lg block transition-colors bebas-neue text-xl">
                    EXPLORE BACK & SHOULDERS PROGRAM
                  </Link>
                </div>
              </div>

              {/* Div 3: Lower Body & Legs */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl h-56">
                    <img src="https://i.ibb.co.com/hRw3wqrK/SLo973.jpg" alt="Legs & Lower Body Workout" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">Lower Body</span>
                  <h3 className="text-3xl font-bold bebas-neue italic text-gray-900">3. Legs & Lower Body Power</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Maximize leg strength, quad sweep, and glute power using heavy squats, leg presses, Romanian deadlifts, and calf raises.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/serviceDetails/1" className="btn bg-red-500 hover:bg-gray-800 text-white font-bold w-full text-center py-2.5 rounded-lg block transition-colors bebas-neue text-xl">
                    EXPLORE LEGS & LOWER BODY PROGRAM
                  </Link>
                </div>
              </div>

              {/* Div 4: Core & HIIT Cardio */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl h-56">
                    <img src="/assets/img2-BJzvBi4v.png" alt="Core & HIIT Cardio Workout" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">Fat Burn & Core</span>
                  <h3 className="text-3xl font-bold bebas-neue italic text-gray-900">4. Core, Abs & HIIT Cardio</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Shred body fat and chisel your abdominal core with high-intensity interval training, hanging leg raises, planks, and sprint conditioning.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/serviceDetails/3" className="btn bg-red-500 hover:bg-gray-800 text-white font-bold w-full text-center py-2.5 rounded-lg block transition-colors bebas-neue text-xl">
                    EXPLORE CARDIO & ABS PROGRAM
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* What you get from bodyboost Services Component (T3) */}
          <div className="py-12">
            <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center mt-12 italic">
              What you get from bodyboost <span className="text-red-500">Services</span>
            </h1>
            <p className="text-center mt-3 w-8/10 mx-auto mb-3 text-sm md:text-2xl text-gray-400">
              Kick your feet up! With a gym designed around you, <br /> we think you'll love it here.
            </p>

            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center w-8/10 gap-5 mt-10 mx-auto">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            )}
          </div>

          {/* Fitness Trainer Component (W3) */}
          <div className="py-12 mb-12">
            <div className="mb-12">
              <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center mt-12 italic">
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

          {/* Happy People Reviews Component (J3) */}
          <div className="mb-20">
            <h1 className="text-3xl w-8/10 mx-auto md:text-6xl bebas-neue text-center mt-12 italic mb-10">
              Happy People <span className="text-red-500">Reviews</span>
            </h1>
            <ReviewSlider reviews={reviews} />
          </div>

        </div>
      </div>
    </>
  );
}
