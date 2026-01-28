// src/components/Media.tsx
import React from "react";

type MediaProps = {
  src?: string;
  alt?: string;
  ratio?: string; // e.g. "16/9", "1/1", "4/3"
  fit?: React.CSSProperties["objectFit"]; // "cover" | "contain" | ...
  className?: string;
};

export default function Media({
  src = "/assets/NACHO.png",
  alt = "",
  ratio = "16/9",
  fit = "cover",
  className = "",
}: MediaProps) {
  return (
    <div className={`media ${className}`.trim()} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} style={{ objectFit: fit }} />
    </div>
  );
}
