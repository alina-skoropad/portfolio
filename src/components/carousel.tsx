import {useEffect, useRef, useState} from "react";
import Slider, {Settings} from "react-slick";
import Image from "@/components/image";
import styles from "./carousel.module.scss";

type ImageObject = {
  src: string;
  alt: string;
  className?: string;
  figcaption?: string;
};

const NextArrow = ({onClick}: any) => <button className={styles.slick_arrow__next} onClick={onClick} aria-label="Next Slide" />;

const PrevArrow = ({onClick}: any) => <button className={styles.slick_arrow__prev} onClick={onClick} aria-label="Previous Slide" />;

const MyCarousel = ({images}: {images: ImageObject[]}) => {
  const sliderRef = useRef<Slider>(null);

  const [centerPadding, setCenterPadding] = useState("25px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) setCenterPadding("60px");
      else if (width <= 1024) setCenterPadding("150px");
      else setCenterPadding("25%");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings: Settings = {
    centerMode: true,
    centerPadding,
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.slick}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((img: ImageObject, index: number) => (
          <div key={index} className={styles.slick_image}>
            <Image src={img.src} alt={img.alt} width={1920} height={900} className={styles.slick_image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
