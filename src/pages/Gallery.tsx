import { useState, useEffect } from "react";
import { ClothingItem, getAll } from "../api/ClothesApi";

const Gallery = () => {
  const [clothes, setClothes] = useState<ClothingItem[]>([]);

  useEffect(() => {
    getAll().then((response) => {
      setClothes(response.data);
    });
  }, []);

  return (
    <div className="h-full flex flex-wrap m-10">
      <div className="flex flex-wrap content-start">
        {clothes.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-50 h-50 m-3 p-2 bg-gray-400"
          >
            <img src={image.url} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
