import React from "react";
import GalleryImgPreview from "../GalleryImgPreview/GalleryImgPreview";

const Gallery = () => {
  return (
    <div
      className="flex justify-center items-center py-10 md:py-16 bg-gray-300"
      id="photos"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-4 font-semibold">Gallery</h2>
        <div className="flex gap-4 flex-wrap justify-between items-center">
          <GalleryImgPreview />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
