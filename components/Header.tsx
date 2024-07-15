import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <nav className="bg-white py-4 px-6 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">Fashion App</h1>
          <div className="space-x-4">
            <Link href="/outfits" className="text-pink-500 hover:text-pink-700">
              Outfit Streaks
            </Link>
            <Link href="/rewards" className="text-pink-500 hover:text-pink-700">
              Reward System
            </Link>
            <Link href="/feed" className="text-pink-500 hover:text-pink-700">
              Social Feed
            </Link>
            <Link href="/chat" className="text-pink-500 hover:text-pink-700">
              Chat Section
            </Link>
            <Link href="/challenges" className="text-pink-500 hover:text-pink-700">
              Fashion Challenges
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Fashion App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/outfits" className="block card">
            <div className="relative">
              <Image src="/images/o1.avif" alt="Outfits" width={250} height={200} className="rounded-lg shadow-md" />
              <h2 className="absolute bottom-0 left-0 bg-pink-600 text-white p-2 rounded-br-lg rounded-tl-lg">Outfit Streaks</h2>
            </div>
          </Link>
          <Link href="/rewards" className="block card">
            <div className="relative">
              <Image src="/images/rr.avif" alt="Rewards" width={350} height={300} className="rounded-lg shadow-md" />
              <h2 className="absolute bottom-0 left-0 bg-pink-600 text-white p-2 rounded-br-lg rounded-tl-lg">Reward System</h2>
            </div>
          </Link>
          <Link href="/feed" className="block card">
            <div className="relative">
              <Image src="/images/sf.avif" alt="Feed" width={350} height={300} className="rounded-lg shadow-md" />
              <h2 className="absolute bottom-0 left-0 bg-pink-600 text-white p-2 rounded-br-lg rounded-tl-lg">Social Feed</h2>
            </div>
          </Link>
          <Link href="/chat" className="block card ">
            <div className="relative">
              <Image src="/images/cs.avif" alt="Chat"width={250} height={200} className="rounded-lg shadow-md" />
              <h2 className="absolute bottom-0 left-0 bg-pink-600 text-white p-2 rounded-br-lg rounded-tl-lg">Chat Section</h2>
            </div>
          </Link>
          <Link href="/challenges" className="block card">
            <div className="relative">
              <Image src="/images/ff.avif" alt="Challenges" width={350} height={200} className="rounded-lg shadow-md" />
              <h2 className="absolute bottom-0 left-0 bg-pink-600 text-white p-2 rounded-br-lg rounded-tl-lg">Fashion Challenges</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
