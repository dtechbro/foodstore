"use client";
import { useEffect, useState } from "react";
import api from "./utils/axios";
import TagList from "./components/TagList";
import StoreList from "./components/StoreList";
import Navbar from "./components/navbar";
import CardList from "./components/CardList";
import SortOptions from "./components/SortOptions";
import Category from "./components/Category";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("popular");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        let url = "/stores";
        const params = new URLSearchParams();

        if (activeTag) {
          params.append("tag", activeTag);
        }
        if (searchQuery) {
          params.append("search", searchQuery);
        }

        const queryString = params.toString();
        if (queryString) {
          url += `?${queryString}`;
        }

        const res = await api.get(url);
        setStores(res.data);
      } catch (err) {
        console.error("Failed to fetch stores", err);
      } finally {
        setLoading(false);
      }
    };

    // Add debounce to prevent too many API calls
    const timeoutId = setTimeout(() => {
      fetchStores();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [activeTag, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="">
      <Navbar onSearch={handleSearch} />
      <hr className=" border-gray-100" />
      <Category />
      <TagList activeTag={activeTag} onSelect={setActiveTag} />

      <div className="px-4">
        <CardList />
        {/* <h1 className="text-2xl font-bold mb-4">Explore Restaurants</h1> */}

        <div className="flex gap-4 py-8 md:px-10">
          <div className="hidden md:block">
            <SortOptions
              storeCount={6}
              selectedSort={selectedSort}
              onSortChange={setSelectedSort}
            />
          </div>
          <StoreList stores={stores} loading={loading} />
        </div>
      </div>
    </main>
  );
}
