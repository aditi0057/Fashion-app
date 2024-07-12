import React from 'react';

export default function RewardsPage() {
  return (
    <div className="rewards-page">
      {/* Header Section */}
      <header className="bg-cover bg-center h-60 flex items-center justify-center bg-pink-500">
        <h1 className="text-5xl font-bold text-white">Earn Rewards with Outfit Streaks!</h1>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">How It Works</h2>
          <div className="flex justify-around">
            <div className="step w-1/3 px-6">
              <img src="/images/post_streak.png" alt="Post Your Streak" className="w-20 h-20 mx-auto mb-4"/>
              <h3 className="text-2xl font-semibold mb-2">Post Your Streak</h3>
              <p>Share your outfits and earn points for each post.</p>
            </div>
            <div className="step w-1/3 px-6">
              <img src="/images/earn_points.png" alt="Earn Points" className="w-20 h-20 mx-auto mb-4"/>
              <h3 className="text-2xl font-semibold mb-2">Earn Points</h3>
              <p>Accumulate points with every streak you post.</p>
            </div>
            <div className="step w-1/3 px-6">
              <img src="/images/redeem_rewards.png" alt="Redeem Rewards" className="w-20 h-20 mx-auto mb-4"/>
              <h3 className="text-2xl font-semibold mb-2">Redeem Rewards</h3>
              <p>Use your points to get exclusive discounts and offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Points System Section */}
      <section className="rewards-system py-16 bg-gray-50 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">Rewards Points System</h2>
          <p className="mb-12">For every streak you post, you earn points that can be redeemed for exciting rewards.</p>
          <div className="flex justify-around">
            <div className="point-item w-1/3 px-6">
              <h3 className="text-2xl font-semibold mb-4">1 Streak</h3>
              <p className="text-xl">10 Points</p>
            </div>
            <div className="point-item w-1/3 px-6">
              <h3 className="text-2xl font-semibold mb-4">5 Streaks</h3>
              <p className="text-xl">60 Points</p>
            </div>
            <div className="point-item w-1/3 px-6">
              <h3 className="text-2xl font-semibold mb-4">10 Streaks</h3>
              <p className="text-xl">150 Points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Redeem Points Section */}
      <section className="redeem-points py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">Redeem Your Points</h2>
          <div className="flex justify-around">
            <div className="reward-item w-1/3 px-6 bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Discount Voucher</h3>
              <p className="text-xl">50 Points</p>
            </div>
            <div className="reward-item w-1/3 px-6 bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-xl">100 Points</p>
            </div>
            <div className="reward-item w-1/3 px-6 bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Gift Card</h3>
              <p className="text-xl">200 Points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action py-16 bg-pink-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Start Earning Rewards Today!</h2>
          <p className="mb-6">Post your outfit streaks and earn amazing rewards. Join our community now!</p>
          <button className="bg-white text-pink-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">Get Started</button>
        </div>
      </section>
    </div>
  );
}
