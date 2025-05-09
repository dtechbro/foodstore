import { LocalDining, LocalMall } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Category() {
  const [activeCategory, setActiveCategory] = useState<string>("restaurants");

  const categories = [
    {
      name: "restaurants",
      icon: <LocalDining fontSize="large" />,
      label: "Restaurants",
    },
    {
      name: "groceries",
      icon: <LocalMall fontSize="large" />,
      label: "Groceries",
    },
  ];
  return (
    <div className="flex items-center gap-8 px-4 md:px-12 py-5">
      {categories.map((category) => (
        <Button
          key={category.name}
          onClick={() => setActiveCategory(category.name)}
          sx={{
            backgroundColor: activeCategory === category.name ? "#000000" : "transparent",
            color: activeCategory === category.name ? "#ffffff" : "#000000",
          }}
        >
          {category.icon} {category.label}
        </Button>
      ))}
    </div>
  );
}

