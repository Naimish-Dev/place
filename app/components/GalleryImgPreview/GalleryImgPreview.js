import React, { useRef, useEffect, useState } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

function GalleryImgPreview(props) {
  const containerRef = useRef(null);

  const [Gallery, setGallery] = useState([
    {
      img: "/assets/gallery/WhatsApp Image 2024-05-11 at 01.45.56_0cf70278.jpg",
    },
    {
      img: "/assets/gallery/WhatsApp Image 2024-05-11 at 01.45.56_50a3e5ca.jpg",
    },
    {
      img: "/assets/gallery/WhatsApp Image 2024-05-11 at 01.45.57_e2a0a7e2.jpg",
    },
    {
      img: "/assets/gallery/WhatsApp Image 2024-05-11 at 01.45.56_df58cae1.jpg",
    },
    {
      img: "/assets/gallery/WhatsApp Image 2024-05-11 at 01.45.57_9243e698.jpg",
    },
    {
      img: "/assets/gallery/WhatsApp Image 2024-05-11 at 01.45.58_8aea1677.jpg",
    },
    {
      img: "/assets/gallery/WhatsApp Image 2024-05-11 at 01.45.58_1cf46881.jpg",
    },
    {
      img: "/assets/gallery/15536.jpg",
    },
  ]);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, []);

  return (
    <div
      className="img-grid grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-3 m-0 p-0 w-full "
      ref={containerRef}
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      {Gallery?.map((img, index) => {
        return (
          <div data-fancybox="gallery" href={img.img} key={index}>
            <div className="relative transition-all duration-300 hover:scale-105 cursor-pointer">
              <img
                src={img.img}
                alt="sq-sample"
                className="object-cover md:w-[200px] mx-auto h-auto rounded aspect-square "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryImgPreview;
