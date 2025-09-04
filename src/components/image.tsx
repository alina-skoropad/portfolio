"use client";

import React, { FC } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  formatFallback?: "jpg" | "png"; 
}

const Image: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  formatFallback = "jpg",
  loading = "lazy", 
  decoding = "async", 
  ...rest
}) => {
  const webpSrc = `${src}.webp`;
  const fallbackSrc = `${src}.${formatFallback}`;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={fallbackSrc} type={`image/${formatFallback}`} />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        {...rest} 
      />
    </picture>
  );
};

export default Image;
