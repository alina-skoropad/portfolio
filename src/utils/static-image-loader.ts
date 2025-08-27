// src/utils/static-image-loader.ts
'use client';
 
// Define a type for the loader's parameters
type ImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};
 
export default function myImageLoader({ src, width, quality }: ImageLoaderParams) {
  return `${src}?w=${width}&q=${quality || 75}`
}