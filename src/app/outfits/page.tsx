'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Post {
  id: string;
  outfit: string;
  brand: string;
  product: string;
  image: string;
  date: string;
}

export default function Outfits() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: uuidv4(),
      outfit: "Casual Jeans and T-Shirt",
      brand: "Levi's",
      product: "501 Original Jeans",
      image: "/images/outfit1.jpeg",
      date: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      outfit: "Summer Dress",
      brand: "H&M",
      product: "Floral Print Dress",
      image: "/images/outfit2.jpeg",
      date: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      outfit: "Workout Gear",
      brand: "Nike",
      product: "Pro Training Shorts",
      image: "/images/outfit3.jpeg",
      date: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      outfit: "Office Attire",
      brand: "Zara",
      product: "Blazer and Trousers",
      image: "/images/outfit4.jpeg",
      date: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      outfit: "Winter Coat",
      brand: "Uniqlo",
      product: "Heattech Coat",
      image: "/images/outfit5.jpeg",
      date: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      outfit: "Beach Wear",
      brand: "Roxy",
      product: "Bikini Set",
      image: "/images/outfit6.jpeg",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [outfit, setOutfit] = useState('');
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!image) return;
    const newPost: Post = {
      id: uuidv4(),
      outfit,
      brand,
      product,
      image: URL.createObjectURL(image),
      date: new Date().toLocaleDateString(),
    };
    setPosts([newPost, ...posts]);
    setOutfit('');
    setBrand('');
    setProduct('');
    setImage(null);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="main-content flex flex-col items-center relative">
      <div className="container mb-8 flex">
        <div className="w-3/4">
          <h1 className="text-4xl font-bold mb-4">Outfit Streaks</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {posts.reduce((acc, post, index) => {
              if (index % 3 === 0) {
                acc.push([post]);
              } else {
                acc[acc.length - 1].push(post);
              }
              return acc;
            }, []).map((postGroup, groupIndex) => (
              <div key={groupIndex} className="flex space-x-4 p-2 bg-white shadow-md rounded-lg max-w-full">
                {postGroup.map((post) => (
                  <div key={post.id} className="card p-2 flex flex-col items-center bg-white shadow-md rounded-lg max-w-xs">
                    <img src={post.image} alt={post.outfit} className="w-full h-32 object-cover mb-2 rounded-lg" />
                    <div className="text-center">
                      <p className="text-sm"><strong>Date:</strong> {post.date}</p>
                      <p className="text-sm"><strong>Outfit:</strong> {post.outfit}</p>
                      <p className="text-sm"><strong>Brand:</strong> {post.brand}</p>
                      <p className="text-sm"><strong>Product:</strong> {post.product}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4 ml-4">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Outfit</label>
              <input
                type="text"
                value={outfit}
                onChange={(e) => setOutfit(e.target.value)}
                placeholder="Describe your outfit"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Brand</label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Product</label>
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Product details"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Upload Picture</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Post Outfit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
