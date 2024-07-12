import Link from 'next/link';
import Outfits from '../src/app/outfits/page';
import Chat from '../src/app/chat/page';
import Feed from '../src/app/feed/page';
import Challenges from '../src/app/challenges/page';
import Rewards from '../src/app/rewards/page';

export default function Home() {
  return (
    <div className="main-content">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fashion App</h1>
        <div className="space-y-4">
          <Link href="/outfits" className="block card">
            Outfit Streaks
          </Link>
          <Link href="/rewards" className="block card">
            Reward System
          </Link>
          <Link href="/feed" className="block card">
            Social Feed
          </Link>
          <Link href="/chat" className="block card">
            Chat Section
          </Link>
          <Link href="/challenges" className="block card">
            Fashion Challenges
          </Link>
        </div>
      </div>
    </div>
  );
}
