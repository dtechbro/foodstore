
'use client'
import { useEffect, useState } from "react";
import api from "./utils/axios";
import TagList from "./components/TagList";
import StoreList from "./components/StoreList";
import Navbar from "./components/navbar";

interface Store {
  id: number;
  name: string;
  image_url: string;
  location: string;
  rating: number;
  tags: string[];
}

export default function Home() {
  const [stores, setStores] = useState<Store[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const url = activeTag ? `/stores?tag=${activeTag}` : "/stores";
        const res = await api.get(url);
        setStores(res.data);
      } catch (err) {
        console.error("Failed to fetch stores", err);
      }
    };

    fetchStores();
  }, [activeTag]);

  return (
    <main className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Explore Restaurants</h1>
      <TagList activeTag={activeTag} onSelect={setActiveTag} />
      <StoreList stores={stores} />
    </main>
  );
}
