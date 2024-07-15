
// pages/index.tsx

"use client";

import { useState } from 'react';
import Head from 'next/head';
import { FaTimes } from 'react-icons/fa';

type Challenge = {
  id: number;
  name: string;
  content: string;
  imageUrl: string;
};

const challenges: Challenge[] = [
  { 
    id: 0,
    name: '7 Days Traditional Wear Challenge', 
    content: 'Show off your traditional outfits for 7 days!', 
    imageUrl: '/images/traditional.jpeg.jpg',
  },
  { 
    id: 1,
    name: 'Street Style Challenge', 
    content: 'Share your best street style looks!', 
    imageUrl: '/images/street.jpeg.jpg',
  },
  { 
    id: 2,
    name: 'Office Wear Challenge', 
    content: 'Rock your best office outfits!', 
    imageUrl: '/images/office.jpeg.jpg',
  },
  { 
    id: 3,
    name: 'Casual Wear Challenge', 
    content: 'Display your casual wear for the week!', 
    imageUrl: '/images/casual.jpeg.jpg',
  },
  { 
    id: 4,
    name: 'Summer Beachwear Challenge', 
    content: 'Show your best beachwear outfits for the summer!', 
    imageUrl: '/images/beachwear.jpg',
  },
  { 
    id: 5,
    name: 'Winter Wonderland Challenge', 
    content: 'Share your cozy winter outfits!', 
    imageUrl: '/images/winter.jpg',
  },
];

const FashionChallenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  return (
    <div className="fashion-challenges-container">
      <h1 className="fashion-challenges-title">
        <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
          Fashion Challenges
        </span>
      </h1>
      <div className="fashion-challenges-grid">
        {challenges.map((challenge) => (
          <div 
            key={challenge.id} 
            className="fashion-challenge-card"
          >
            <div 
              className="fashion-challenge-card-title"
              onClick={() => setSelectedChallenge(challenge)}
            >
              {challenge.name}
            </div>
            <div className="fashion-challenge-card-image-container">
              <div className="fashion-challenge-card-image">
                <img src={challenge.imageUrl} alt={challenge.name} />
              </div>
            </div>
            <div className="fashion-challenge-card-content">
              <p className="fashion-challenge-card-description">{challenge.content}</p>
              <button
                className="fashion-challenge-card-button"
                onClick={() => setSelectedChallenge(challenge)}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}


      {selectedChallenge && (
        <div className="fashion-challenge-modal">
          <div className="fashion-challenge-modal-content">
            <button
              className="fashion-challenge-modal-close"
              onClick={() => setSelectedChallenge(null)}
            >
              <FaTimes size={24} />
            </button>
            <h2 className="fashion-challenge-modal-title">{selectedChallenge.name}</h2>
            <p className="fashion-challenge-modal-description">{selectedChallenge.content}</p>
            <button
              className="fashion-challenge-modal-button"
              onClick={() => setSelectedChallenge(null)}
            >
              Close
            </button>
          </div>
        </div>
       
      )}
    </div> 
    </div>
  );
};
