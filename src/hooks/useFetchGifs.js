import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading
  };
};

export default useFetchGifs;