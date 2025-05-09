import {
  ImportExport,
  Menu,
  Place,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import SortOptions from "./SortOptions"; // Adjust path as needed

interface NavbarProps {
  onSearch: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("popular");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 gap-4 md:gap-0 w-full relative">
      {/* Left section: Menu, Logo, Location */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Menu className="text-3xl" />
        <Image
          src={"/logo-circle-green.svg"}
          alt="logo"
          width={36}
          height={36}
          className="hidden md:block" // Show on all screens
        />
        <Button
          variant="text"
          sx={{ color: "#000000", textTransform: "none", fontWeight: 600 }}>
          <Place className="text-2xl mr-1" />
          <span>Set Location</span>
        </Button>
      </div>

      {/* Center section: Search */}
      <div className="items-center w-full md:w-[500px] flex gap-4 justify-center">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search restaurants or food"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setShowSort((prev) => !prev)}>
            <ImportExport />
          </button>
        </div>
      </div>

      {/* Right section: Sign In, Cart */}
      <div className="flex items-center gap-3 md:gap-5 mt-2 md:mt-0 absolute right-4 md:relative">
        <Button variant="text" sx={{ color: "#000000", fontWeight: 600 }}>
          <span className="hidden md:block">SIGN IN</span>
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            borderRadius: "30px",
            boxShadow: "none",
            paddingLeft: "18px",
            paddingRight: "18px",
            fontWeight: 600,
          }}>
          <ShoppingCart sx={{ mr: 1 }} />
          <span className="hidden md:block">CART</span>
          {/* <span className="ml-1">• 0</span> */}
        </Button>
      </div>

      {/* Mobile SortOptions Drawer/Modal */}
      {showSort && (
        <div className="inset-0 z-10 absolute bottom-0">
          <div className="bg-white w-full h-auto p-4 shadow-lg">
            <button
              className="mb-4 text-right w-full"
              onClick={() => setShowSort(false)}>
              Close
            </button>
            <SortOptions
              storeCount={648}
              selectedSort={selectedSort}
              onSortChange={(val) => {
                // handle sort change
                setSelectedSort(val);
                setShowSort(false); // Optionally close after selection
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
