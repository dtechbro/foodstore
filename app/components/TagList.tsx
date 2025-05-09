"use client";

import { useEffect, useState } from "react";
import api from "../utils/axios";
import Image from "next/image";
import { Skeleton } from "@mui/material";
// import Image from "next/image";
// import { Box } from "@mui/material";

interface Tag {
  id: number;
  name: string;
  image_url: string;
}

interface TagListProps {
  onSelect: (tag: string | null) => void;
  activeTag: string | null;
}

export default function TagList({ onSelect, activeTag }: TagListProps) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await api.get("/tags");
        setTags(res.data);
      } catch (err) {
        console.error("Failed to fetch tags", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className="flex gap-8 overflow-x-auto border-y border-gray-100 pl-4 md:pl-12 py-6">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-1 rounded ${
          activeTag === null ? "bg-blue-100 text-black" : ""
        }`}>
        All
      </button>

      {loading
        ? Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="text" width={40} height={20} />
            </div>
          ))
        : tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => onSelect(tag.name)}
              className={`px-2 py-2 flex flex-col rounded-lg items-center gap-2 ${
                activeTag === tag.name ? "bg-blue-200 text-white" : ""
              }`}>
              <Image
                src={tag.image_url}
                alt={tag.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <p className="text-nowrap">{tag.name}</p>
            </button>
          ))}
    </div>
  );
}
