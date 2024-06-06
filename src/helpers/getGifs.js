const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

export const getGifs = async (category)=>{
    const url = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`);


    const {data} = await url.json();

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}