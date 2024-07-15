import React from 'react';

export default function RewardsPage() {
  return (
    <div className="rewards-page font-montserrat">
      {/* Header Section */}
      <header className="bg-cover bg-center h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
        <h1 className="text-6xl font-extrabold text-black drop-shadow-lg">Earn Rewards with Outfit Streaks!</h1>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-around mb-12">
            <div className="step md:w-1/3 px-6 mb-8 md:mb-0">
              <img src="/images/r1.avif" alt="Post Your Streak" className="w-16 h-16 mx-auto mb-4 rounded-full"/>
              <h3 className="text-2xl font-semibold mb-2">Post Your Streak</h3>
              <p className="text-base">Share your outfits and earn points for each post.</p>
            </div>
            <div className="step md:w-1/3 px-6 mb-8 md:mb-0">
              <img src="/images/r2.avif" alt="Earn Points" className="w-16 h-16 mx-auto mb-4 rounded-full"/>
              <h3 className="text-2xl font-semibold mb-2">Earn Points</h3>
              <p className="text-base">Accumulate points with every streak you post.</p>
            </div>
            <div className="step md:w-1/3 px-6 mb-8 md:mb-0">
              <img src="/images/r3.avif" alt="Redeem Rewards" className="w-16 h-16 mx-auto mb-4 rounded-full"/>
              <h3 className="text-2xl font-semibold mb-2">Redeem Rewards</h3>
              <p className="text-base">Use your points to get exclusive discounts and offers.</p>
            </div>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Get Started</button>
        </div>
      </section>

      {/* Rewards Points System Section */}
      <section className="rewards-system py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Rewards Points System</h2>
          <p className="mb-12 text-base">For every streak you post, you earn points that can be redeemed for exciting rewards.</p>
          <div className="">
            <div className="point-item p-6 bg-white rounded-lg shadow-md md:col-start-2">
              <h3 className="text-2xl font-semibold mb-4">1 Streak</h3>
              <p className="text-xl">10 Points</p>
            </div>
            <div className="point-item p-6 bg-white rounded-lg shadow-md md:col-start-1">
              <h3 className="text-2xl font-semibold mb-4">5 Streaks</h3>
              <p className="text-xl">60 Points</p>
            </div>
            <div className="point-item p-6 bg-white rounded-lg shadow-md md:col-start-3">
              <h3 className="text-2xl font-semibold mb-4">10 Streaks</h3>
              <p className="text-xl">150 Points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Redeem Points Section */}
      <section className="redeem-points py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Redeem Your Points</h2>
          <div className="">
            <div className="reward-item p-8 bg-white rounded-lg shadow-md md:col-start-2">
              <h3 className="text-2xl font-semibold mb-4">Discount Voucher</h3>
              <p className="text-xl">50 Points</p>
            </div>
            <div className="reward-item p-8 bg-white rounded-lg shadow-md md:col-start-1">
              <h3 className="text-2xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-xl">100 Points</p>
            </div>
            <div className="reward-item p-8 bg-white rounded-lg shadow-md md:col-start-3">
              <h3 className="text-2xl font-semibold mb-4">Gift Card</h3>
              <p className="text-xl">200 Points</p>
            </div>
          </div>
          <button className="mt-12 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Redeem Now</button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action py-16 bg-indigo-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Start Earning Rewards Today!</h2>
          <p className="mb-6 text-base">Post your outfit streaks and earn amazing rewards. Join our community now!</p>
          <button className="bg-white text-indigo-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">Get Started</button>
        </div>
      </section>
    </div>
  );
}
