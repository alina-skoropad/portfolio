"use client";

import React, { FC } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;                 
  alt: string;
  width: number;                 
  height: number;               
  formatFallback?: "jpg" | "png"; 
  priority?: boolean;
  sizes?: string;                
  srcSetWidths?: number[];       
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
  priority = false,
  sizes = "(max-width: 768px) 100vw, 1280px",
  srcSetWidths = [320, 480, 768, 1024, 1280, 1920, 2560],
  ...rest
}) => {

  const generateSrcSet = (format: "webp" | typeof formatFallback) =>
    srcSetWidths
      .map(w => `${src}-${w}w.${format} ${w}w`)
      .join(", "); 

  return (
    <picture>
      <source srcSet={generateSrcSet("webp")} type="image/webp" sizes={sizes} />
      <source srcSet={generateSrcSet(formatFallback)} type={`image/${formatFallback}`} sizes={sizes} />
      <img
        src={`${src}-${width}w.${formatFallback}`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : loading}
        decoding={decoding}
        sizes={sizes}
        srcSet={generateSrcSet(formatFallback)}
        {...rest}
      />
    </picture>
  );
};

export default Image;
