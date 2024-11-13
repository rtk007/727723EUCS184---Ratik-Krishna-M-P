import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const carouselImages = [
  {
    id: 1,
    src: 'https://wallpapercave.com/wp/wp2496944.jpg',
    caption: 'Watch: The Legacy of MS Dhoni'
  },
  {
    id: 2,
    src: 'https://wallpapercave.com/wp/GVjxEhQ.jpg',
    caption: 'Watch: RDJ coming back to MARVEL!!! But not as IRONMAN'
  },
  {
caption: 'Watch: IND vs SA T20 WC Final : Watch Indians\' epic triumph over SA in Barbados'
  }
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
    }, 2500); // Change slide every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div style={{ position: 'relative', height: '80vh', margin: '30px 0' }}>
      {carouselImages.map((image, index) => (
        <div key={image.id} style={{
          position: 'absolute', width: '100%', height: '100%',
          transform: `translateX(${(index - currentImage) * 100}%)`,
          transition: 'transform 0.5s ease-in-out', opacity: index === currentImage ? 1 : 0,
          backgroundImage: `url(${image.src})`, backgroundSize: 'cover', borderRadius: '8px'
        }}>
          <div style={{
            position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff', padding: '10px 15px', borderRadius: '6px'
          }}>
            {image.caption}
          </div>
        </div>
      ))}
      <Button onClick={handlePrev} sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
        <ArrowBack />
      </Button>
      <Button onClick={handleNext} sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
        <ArrowForward />
      </Button>
    </div>
  );
};

export default Carousel;
