import GifCard from "./GifCard";
import useImages from "../hooks/useImages";

export default function GifGrid({ category }) {
  const { images, isLoading } = useImages(category);

  return (
    <>
      <h2>{category}</h2>
      {isLoading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifCard key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}