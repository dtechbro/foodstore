import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { useState } from "react";
import { Skeleton } from "@mui/material";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CardList() {
  const cardImg = [
    {
      id: 1,
      img: "/Frame-22.png",
      alt: "header cards",
    },
    {
      id: 2,
      img: "/Frame-23.png",
      alt: "header cards",
    },
    {
      id: 3,
      img: "/Frame-24.png",
      alt: "header cards",
    },
    {
      id: 4,
      img: "/Frame-25.png",
      alt: "header cards",
    },
    {
      id: 5,
      img: "/Frame-26.png",
      alt: "header cards",
    },
    {
      id: 6,
      img: "/Frame-27.png",
      alt: "header cards",
    },
    {
      id: 7,
      img: "/Frame-28.png",
      alt: "header cards",
    },
  ];

  // Track loaded images
  const [loaded, setLoaded] = useState(Array(cardImg.length).fill(false));

  const handleImageLoad = (idx: number) => {
    setLoaded((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <div className="w-full md:px-10 my-4 relative">
      <Swiper
        modules={[Pagination, Mousewheel]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        // }}
        mousewheel={true}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full">
        {cardImg.map((item, idx) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full" style={{ height: 200 }}>
              {!loaded[idx] && (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                />
              )}
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className={`object-cover rounded-lg transition-opacity duration-300 ${
                  loaded[idx] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(idx)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-pagination block md:hidden mt-2 text-center" />
    </div>
  );
}
