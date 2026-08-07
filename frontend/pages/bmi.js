import React, { useState } from 'react';
import Head from 'next/head';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!height || !weight) {
      setStatus('Please enter both height and weight.');
      setBmi(null);
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters <= 0 || weightInKg <= 0) {
      setStatus('Please enter valid positive numbers.');
      setBmi(null);
      return;
    }

    const calculatedBmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) {
      setStatus('Underweight');
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      setStatus('Normal weight');
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obesity');
    }
  };

  return (
    <>
      <Head>
        <title>BMI Calculator || BodyBoost</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 py-10">
        <div className="w-full max-w-md bg-[#1e293b] p-6 sm:p-10 rounded-xl shadow-md border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">BMI Calculator</h2>
          
          <form onSubmit={handleCalculate} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Height (in cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 170"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Weight (in kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 65"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-2 rounded-lg text-lg font-semibold"
            >
              Calculate BMI
            </button>
          </form>

          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-xl font-bold">
                Your BMI: <span className="text-purple-400">{bmi}</span>
              </p>
              <p className="mt-2 text-sm italic">{status}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
