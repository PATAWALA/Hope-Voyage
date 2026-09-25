"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & { fallback?: string };

export default function ImageWithFallback({
  fallback = "/images/placeholder.jpg",
  alt,
  ...props
}: Props) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setSrc(fallback)}
    />
  );
}