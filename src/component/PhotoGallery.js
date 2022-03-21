import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import sportsGallery1 from "../assets/sportsGallery1.png";
import sportsGallery2 from "../assets/sportsGallery2.png";
import sportsGallery3 from "../assets/sportsGallery3.png";
import sportsGallery4 from "../assets/sportsGallery4.png";
import sportsGallery5 from "../assets/sportsGallery5.png";
import sportsGallery6 from "../assets/sportsGallery6.png";

export default function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
    sportsGallery4,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="photo__gallery__container__content__heading">
        Photo Gallery
      </div>
      <div className="photo__gallery__container__content">
        {images.map((src, index) => (
          <div className="photo__gallery__container__content__img__wrapper">
            <img
              loading="lazy"
              src={src}
              onClick={() => openImageViewer(index)}
              key={index}
              alt="photo__gallery__container__content__img"
              className="photo__gallery__container__content__img"
            />
          </div>
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </>
  );
}
