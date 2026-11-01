export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_GIPHY_KEY
    }&q=${encodeURIComponent(category)}&limit=5`;
  
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    return data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  };