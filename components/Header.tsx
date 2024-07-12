import Link from 'next/link';
import Outfits from '../src/app/outfits/page';
import Chat from '../src/app/chat/page';
import Feed from '../src/app/feed/page';
import Challenges from '../src/app/challenges/page';
import Rewards from '../src/app/rewards/page';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="/outfits">Outfits</Link>
            <Link href="/rewards">Rewards</Link>
            <Link href="/feed">Feed</Link>
            <Link href="/chat">Chat</Link>
            <Link href="/challenges">Challenges</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
