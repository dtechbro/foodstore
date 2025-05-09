import { Star } from "@mui/icons-material";
import Image from "next/image";
import { Skeleton } from "@mui/material";

interface Store {
  id: number;
  name: string;
  image_url: string;
  location: string;
  rating: number;
  tags: string[];
}

interface StoreListProps {
  stores: Store[];
  loading?: boolean;
}

export default function StoreList({ stores, loading = false }: StoreListProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {loading
        ? Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={128}
                className="rounded"
              />
              <Skeleton
                variant="text"
                width="60%"
                height={28}
                className="mt-2"
              />
              <Skeleton variant="text" width="40%" height={20} />
              <Skeleton variant="text" width="30%" height={20} />
            </div>
          ))
        : stores.map((store) => (
            <div key={store.id} className="">
              <Image
                src={store.image_url}
                alt={store.name}
                width={300}
                height={100}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{store.name}</h3>
              {/* <p className="text-sm text-gray-600">{store.location}</p> */}
              <p className="text-xs text-gray-500 mt-1">
                {store.tags.join(", ")}
              </p>
              <p className="text-sm">
                <Star fontSize="small" className="text-green-500" /> {store.rating}
                <span className="ml-5">100+ rating</span>
              </p>
            </div>
          ))}
    </div>
  );
}
