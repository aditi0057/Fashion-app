// components/Feed.js
import React from 'react';

const feedData = [
  { id: 1, title: 'Trending Styles', description: 'Check out the latest trends in fashion.', image: '/images/F1.webp', bg: 'bg-pastelPink' },
  { id: 2, title: 'User-Generated Content', description: 'Explore outfits and fashion tips from our community.', image: '/images/F3.webp', bg: 'bg-pastelPurple' },
  { id: 3, title: 'Style Guides', description: 'Get outfit inspiration for different occasions.', image: '/images/f22.jpeg.jpg', bg: 'bg-pastelYellow' },
  { id: 4, title: 'Fashion News', description: 'Stay updated with the latest news in the fashion world.', image: '/images/f4.jpg', bg: 'bg-pastelGreen' },
  { id: 5, title: 'Shopping Deals', description: 'Exclusive deals and discounts from top brands.', image: '/images/f5.jpeg.jpg', bg: 'bg-pastelBlue' },
  { id: 6, title: 'DIY Fashion', description: 'Learn how to create your own fashion projects.', image: '/images/f6.jpg', bg: 'bg-pastelPink' },
  { id: 7, title: 'Influencer Spotlights', description: 'Discover unique styles from top influencers.', image: '/images/f7.jpg', bg: 'bg-pastelPurple' },
  { id: 8, title: 'Behind the Scenes', description: 'Get an insider look at the fashion industry.', image: '/images/f8.jpeg.jpg', bg: 'bg-pastelYellow' },
  { id: 9, title: 'Outfit of the Day (OOTD)', description: 'See the best outfits from our users.', image: '/images/ootd.jpg', bg: 'bg-pastelGreen' },
  { id: 10, title: 'Fashion Challenges', description: 'Join themed fashion challenges and get featured.', image: '/images/f9.webp', bg: 'bg-pastelBlue' },
  { id: 11, title: 'Seasonal Collections', description: 'Explore the latest seasonal collections.', image: '/images/f10.webp', bg: 'bg-pastelPink' },
  { id: 12, title: 'Sustainable Fashion', description: 'Discover eco-friendly fashion choices.', image: '/images/f11.jpg', bg: 'bg-pastelPurple' },
  { id: 13, title: 'Fashion History', description: 'Learn about iconic moments in fashion history.', image: '/images/f12.jpg', bg: 'bg-pastelYellow' },
  { id: 14, title: 'Celebrity Style', description: 'Get tips on recreating celebrity looks.', image: '/images/f13.png', bg: 'bg-pastelGreen' },
  { id: 15, title: 'Exclusive Offers', description: 'Discover exclusive offers just for you.', image: '/images/offer1.jpg', bg: 'bg-pastelBlue' },
  { id: 16, title: 'Summer Sales', description: 'Enjoy special discounts on summer fashion essentials.', image: '/images/summersale.jpg', bg: 'bg-pastelBlue' },
  { id: 17, title: 'Holiday Deals', description: 'Find great deals for your holiday shopping.', image: '/images/holiday.jpeg.jpg', bg: 'bg-pastelPink' },
  { id: 18, title: 'Weekend Specials', description: 'Exclusive offers for a stylish weekend.', image: '/images/weekend sp.jpg', bg: 'bg-pastelPurple' },
  { id: 19, title: 'Fashion Rewards', description: 'Earn rewards with every purchase.', image: '/images/rewards.webp', bg: 'bg-pastelYellow' },
  { id: 20, title: 'Flash Sales', description: 'Grab items at discounted prices during our flash sales.', image: '/images/flashsale.jpeg.jpg', bg: 'bg-pastelPink' },
  { id: 21, title: 'Seasonal Discounts', description: 'Enjoy seasonal discounts on your favorite brands.', image: '/images/seasonal.webp', bg: 'bg-pastelPurple' },
  { id: 22, title: 'Limited-Time Deals', description: 'Hurry! Limited-time offers on selected fashion items.', image: '/images/limited.jpg', bg: 'bg-pastelYellow' },
];

const Feed = () => {
  return (
    <div className="feed-container">
      {/* For You Section */}
      <div className="for-you-section">
        <h2 className="section-title text-xl font-bold mb-4">For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {feedData.slice(0, 4).map(item => (
            <div key={item.id} className={`polaroid ${item.bg} rounded-lg shadow-lg overflow-hidden`}>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="title font-heading text-lg">{item.title}</h2>
                <p className="description text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fashion Tube Section */}
      <div className="fashion-tube-section mt-8">
        <h2 className="section-title text-xl font-bold mb-4">Fashion Tube</h2>
        <div className="flex overflow-x-auto space-x-4">
          {feedData.slice(4, 8).map(item => (
            <div key={item.id} className={`tube-card ${item.bg} rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-72`}>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="title font-heading text-lg">{item.title}</h2>
                <p className="description text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offers Only For You Section */}
      <div className="offers-section mt-8">
        <h2 className="section-title text-xl font-bold mb-4">Offers Only For You</h2>
        <div className="flex overflow-x-auto space-x-4">
          {feedData.slice(15, 20).map(item => (
            <div key={item.id} className={`offer-card ${item.bg} rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-72`}>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="title font-heading text-lg">{item.title}</h2>
                <p className="description text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In the Spotlight Section */}
      <div className="spotlight-section mt-8">
        <h2 className="section-title text-xl font-bold mb-4">In the Spotlight</h2>
        <div className="flex overflow-x-auto space-x-4">
          {feedData.slice(16,22).map(item => (
            <div key={item.id} className={`spotlight-card ${item.bg} rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-72`}>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="title font-heading text-lg">{item.title}</h2>
                <p className="description text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Feed;
