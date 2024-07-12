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

  const handleDelete = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="main-content flex flex-col items-center relative">
      <div className="container mb-8 flex flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Outfit Streaks</h1>
          <div className="scrolling-gallery overflow-x-auto whitespace-nowrap py-2 px-4">
            {posts.map((post) => (
              <div key={post.id} className="inline-block card relative p-4 bg-white shadow-lg rounded-lg m-2 transition-transform transform hover:scale-105">
                <button
                  onClick={() => handleDelete(post.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
                <img src={post.image} alt={post.outfit} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <div className="text-center">
                  <p className="text-sm text-gray-600"><strong>Date:</strong> {post.date}</p>
                  <p className="text-sm text-gray-800"><strong>Outfit:</strong> {post.outfit}</p>
                  <p className="text-sm text-gray-600"><strong>Brand:</strong> {post.brand}</p>
                  <p className="text-sm text-gray-600"><strong>Product:</strong> {post.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-8 md:mt-0 md:ml-8">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Post Your Outfit</h2>
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
            <button type="submit" className="post-outfit-button">
              Post Outfit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
