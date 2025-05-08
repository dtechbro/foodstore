"use client";

import { useEffect, useState } from "react";
import api from "../utils/axios";
import Image from "next/image";
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

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await api.get("/tags");
        setTags(res.data);
      } catch (err) {
        console.error("Failed to fetch tags", err);
      }
    };

    fetchTags();
  }, []);

  return (
    <div  className="flex gap-3 flex-wrap mb-6">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 border rounded ${
          activeTag === null ? "bg-blue-500 text-white" : ""
        }`}>
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onSelect(tag.name)}
          className={`px-3 py-1 flex flex-col rounded-lg items-center gap-2 ${
            activeTag === tag.name ? "bg-blue-200 text-white" : ""
          }`}>
          <Image
            src={tag.image_url}
            alt={tag.name}
            className="w-8 h-8 object-cover"
          />

          {tag.name}
        </button>
      ))}
    </div>
  );
}
