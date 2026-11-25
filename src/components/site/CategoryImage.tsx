import { useState, useEffect } from "react";

export const CategoryImage = ({
  image,
  alt,
  className = "",
}: {
  image: string | string[];
  alt: string;
  className?: string;
}) => {
  const images = Array.isArray(image) ? image : [image];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 2500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      ))}
    </div>
  );
};
