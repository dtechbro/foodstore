// import { useState } from "react";
import { Sort } from "@mui/icons-material";

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  // { value: "nearest", label: "Nearest" }, // Ignored as per your request
  { value: "highestRated", label: "Highest rated" },
  { value: "newest", label: "Newest" },
  { value: "mostRated", label: "Most Rated" },
];

interface SortOptionsProps {
  storeCount: number;
  selectedSort: string;
  onSortChange: (value: string) => void;
}

export default function SortOptions({
  storeCount,
  selectedSort,
  onSortChange,
}: SortOptionsProps) {
  return (
    <div className="p-4 w-[300px]">
      <h2 className="text-2xl font-bold mb-1">All Stores</h2>
      <div className="text-gray-400 mb-6">({storeCount} Stores)</div>
      <div className="flex items-center gap-2 mb-3">
        <Sort className="text-xl" />
        <span className="text-xl font-semibold">Sort</span>
      </div>
      <div className="flex flex-col gap-4">
        {sortOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer">
            <span
              className={`w-4 h-4 rounded-full border-2 ${
                selectedSort === option.value
                  ? "bg-black border-black"
                  : "bg-gray-200 border-gray-200"
              } inline-block`}
            />
            <input
              type="radio"
              name="sort"
              value={option.value}
              checked={selectedSort === option.value}
              onChange={() => onSortChange(option.value)}
              className="hidden"
            />
            <span className="text-lg">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
