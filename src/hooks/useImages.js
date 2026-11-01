import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useImages(category) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getGifs(category).then((newImages) => {
      setImages(newImages);
      setIsLoading(false);
    });
  }, [category]);

  return { images, isLoading };
}