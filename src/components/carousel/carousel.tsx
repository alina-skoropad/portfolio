"use client";

import {useRef, useEffect} from "react";
import Slider, {Settings} from "react-slick";
import Image from "@/components/common/image";
import styles from "./carousel.module.scss";

type ImageObject = {
  src: string;
  alt: string;
  className?: string;
  figcaption?: string;
};

type ArrowProps = {
  onClick?: () => void;
};

const NextArrow = ({onClick}: ArrowProps) => (
  <button type="button" className={`${styles["slider__arrow"]} ${styles["slider__arrow--next"]}`} onClick={onClick} aria-label="Next Slide">
    <svg className={styles["slider__arrow_icon"]} viewBox="0 0 16 16" aria-hidden="true">
      <path d="m5 2 6 6-6 6" />
    </svg>
  </button>
);

const PrevArrow = ({onClick}: ArrowProps) => (
  <button type="button" className={`${styles["slider__arrow"]} ${styles["slider__arrow--prev"]}`} onClick={onClick} aria-label="Previous Slide">
    <svg className={styles["slider__arrow_icon"]} viewBox="0 0 16 16" aria-hidden="true">
      <path d="m11 2-6 6 6 6" />
    </svg>
  </button>
);

const MyCarousel = ({images}: {images: ImageObject[]}) => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    return () => {
      sliderRef.current = null;
    };
  }, []);

  if (!images?.length) return null;

  const settings: Settings = {
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    infinite: images.length > 1,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={`${img.src}-${index}`} className={styles["slider__slide"]}>
            <Image src={img.src} alt={img.alt} width={1920} height={900} className={styles["slider__image"]} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
