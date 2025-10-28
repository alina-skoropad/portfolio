import {useRef} from "react";
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
  <button
    className={`${styles.slider__arrow} ${styles["slider__arrow--next"]}`}
    onClick={onClick}
    aria-label="Next Slide"
  />
);

const PrevArrow = ({onClick}: ArrowProps) => (
  <button
    className={`${styles.slider__arrow} ${styles["slider__arrow--prev"]}`}
    onClick={onClick}
    aria-label="Previous Slide"
  />
);

const MyCarousel = ({images}: {images: ImageObject[]}) => {
  const sliderRef = useRef<Slider>(null);
  const loadedImagesRef = useRef(0);

  const handleImageLoad = () => {
    loadedImagesRef.current += 1;
    if (loadedImagesRef.current === images.length && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const settings: Settings = {
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
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
          <div key={index} className={styles.slider__slide}>
            <Image
              src={img.src}
              alt={img.alt}
              width={1920}
              height={900}
              className={styles.slider__image}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
