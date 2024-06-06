import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    // CustomHooks
    const {images, isLoading} = useFetchGifs(category);



  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
      {(!isLoading) ? 
      images.map((image)=>(        
         <GifItem key={image.id} {...image}/>
        )

      ) : <h2>Cargando...</h2>
      }</div>
    </>
  );
};

