"use client";

import React from 'react';

const Image = ({ src, alt, width, height, className }) => {
  const webpSrc = `${src}.webp`;
  const fallbackSrc = `${src}.jpg`;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};

export default Image;