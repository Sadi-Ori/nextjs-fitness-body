import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import api from '../../lib/api';
import { AuthContext } from '../../lib/AuthContext';
import { Check, Star } from 'lucide-react';

export default function ServiceDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { showToast } = useContext(AuthContext);

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Reviews state (component rR)
  const initialReviews = [
    { id: 1, text: "Amazing fitness program! Helped me lose weight and build strength.", rating: 5 },
    { id: 2, text: "Good workouts but could use more stretching sessions.", rating: 4 },
  ];
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [ratingInput, setRatingInput] = useState(0);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    if (!id) return;
    async function fetchService() {
      try {
        const res = await api.get(`/services/${id}/`);
        setService(res.data);
      } catch (err) {
        console.error("Failed to load service", err);
      } finally {
        setLoading(false);
      }
    }
    fetchService();
  }, [id]);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewText.trim() || ratingInput < 1) {
      if (showToast) showToast("Please provide both a star rating and a review.", "error");
      else alert("Please provide both a star rating and a review.");
      return;
    }
    const newReview = {
      id: Date.now(),
      text: reviewText,
      rating: ratingInput,
    };
    setReviewsList([newReview, ...reviewsList]);
    setReviewText('');
    setRatingInput(0);
    if (showToast) showToast("Review submitted successfully!", "success");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
      </div>
    );
  }

  const {
    name,
    category,
    frequency,
    price,
    description,
    image,
    features = [],
    subscription_benefits = [],
    rating,
    number_of_reviews,
  } = service;

  return (
    <>
      <Head>
        <title> Details Page || BodyBoost</title>
      </Head>

      <div className="container mx-auto pb-16">
        {/* Main Details Card */}
        <div className="flex md:flex-row flex-col justify-center gap-10 mt-20 p-4 mx-4">
          
          {/* Left Column Image */}
          <div className="bg-amber-50 rounded-lg p-5 md:p-4 lg:p-16 md:w-1/2 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="w-96 mx-auto md:h-[600px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* Right Column Details */}
          <div className="space-y-4 md:w-1/2 text-gray-800">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">
              Name : {name}
            </h1>
            <p className="md:text-xl lg:text-2xl font-semibold">
              Category : {category}
            </p>
            <p className="md:text-xl lg:text-2xl font-semibold">
              Frequency : {frequency}
            </p>
            <p className="md:text-xl lg:text-2xl font-semibold">
              Price : {price}
            </p>
            <p className="md:text-xl lg:text-2xl">
              <span className="font-semibold">Discription :</span> {description}
            </p>

            <h1 className="md:text-xl lg:text-2xl font-semibold text-gray-900 pt-2">
              Features :
            </h1>
            <ul className="space-y-1">
              {features.map((feat, idx) => (
                <li key={idx} className="text-gray-600 md:text-xl flex gap-2 items-center">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h1 className="md:text-xl lg:text-2xl font-semibold text-gray-900 pt-2">
              Subscription_benefits :
            </h1>
            <ul className="space-y-1">
              {subscription_benefits.map((benefit, idx) => (
                <li key={idx} className="text-gray-600 md:text-xl flex gap-2 items-center">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 pt-2">
              <h1 className="md:text-xl lg:text-2xl font-semibold flex items-center gap-2">
                Rating : <span className="text-amber-500">{rating} ★</span>
              </h1>
            </div>

            <h1 className="md:text-xl lg:text-2xl font-semibold">
              Number_of_reviews : {number_of_reviews}
            </h1>
          </div>

        </div>

        {/* User Reviews Section (component rR) */}
        <div className="flex md:flex-row flex-col justify-between gap-5 mx-auto p-5 mt-10 bg-blue-50 rounded shadow max-w-6xl">
          
          {/* Submitted Reviews List */}
          <div className="mx-2 flex-1 space-y-4">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Submitted Reviews</h3>
            {reviewsList.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              <ul className="space-y-3">
                {reviewsList.map((rev) => (
                  <li key={rev.id} className="p-4 rounded shadow bg-white border border-gray-100">
                    <div className="flex items-center mb-2">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div className="flex items-center text-amber-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= rev.rating ? 'fill-current text-amber-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{rev.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Add Review Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Leave a Review</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Star Rating</label>
              <div className="flex gap-1 cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => setRatingInput(star)}
                    className={`w-6 h-6 transition-colors ${
                      star <= ratingInput ? 'fill-current text-amber-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
              <textarea
                rows="4"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with this service..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm text-gray-800"
              />
            </div>

            <button
              onClick={handleAddReview}
              className="bg-red-500 hover:bg-gray-800 text-white font-bold px-6 py-2 rounded transition-colors text-sm"
            >
              Submit Review
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
