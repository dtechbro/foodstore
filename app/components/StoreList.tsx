import Image from "next/image";

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
}

export default function StoreList({ stores }: StoreListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {stores.map((store) => (
        <div key={store.id} className="border rounded-lg p-4 shadow">
          <Image
            src={store.image_url}
            alt={store.name}
            width={300}  
            height={100}
            className="w-full h-32 object-cover rounded"
          />
          <h3 className="text-lg font-semibold mt-2">{store.name}</h3>
          <p className="text-sm text-gray-600">{store.location}</p>
          <p className="text-sm">⭐ {store.rating}</p>
          <p className="text-xs text-gray-500 mt-1">{store.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
