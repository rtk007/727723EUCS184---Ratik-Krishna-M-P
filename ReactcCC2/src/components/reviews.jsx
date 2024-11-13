import React, { useState, useEffect } from 'react';
import { Button, Avatar } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

const Carousel = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const mockReviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 4.5,
      content: "A remarkable cinematic achievement, showcasing exceptional cinematography and powerful performances. This film truly stands out in its genre. The director's vision is evident in every frame, and the attention to detail is commendable. The score complements the visuals perfectly, creating an immersive experience that lingers long after the credits roll.",
      date: "2023-05-15"
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 3.8,
      content: "An engaging narrative filled with unexpected twists. While the pacing could use improvement, it remains a captivating watch overall. The character development is intriguing, allowing viewers to form strong connections with the protagonists. However, some subplots feel underdeveloped, leaving room for improvement in future installments.",
      date: "2023-05-14"
    },
    {
      id: 3,
      author: "Mike Johnson",
      rating: 5,
      content: "Easily one of the finest films of the year, this is a must-see for any film enthusiast. The storytelling and direction are outstanding. Every aspect of the production, from the set design to the costume choices, contributes to a cohesive and believable world. The ensemble cast delivers performances that are both nuanced and powerful, elevating the material to new heights.",
      date: "2023-05-13"
    },
    {
      id: 4,
      author: "Sarah Williams",
      rating: 4.2,
      content: "Exceptional performances and a compelling storyline make this film memorable. The conclusion leaves a lasting impression on viewers. The cinematography is breathtaking, with each shot carefully composed to enhance the narrative. While some plot points may be predictable, the execution is so masterful that it hardly detracts from the overall experience.",
      date: "2023-05-12"
    },
    {
      id: 5,
      author: "Chris Brown",
      rating: 3.5,
      content: "A solid film with memorable moments, though it could benefit from deeper character development. It offers an enjoyable experience overall. The premise is intriguing and the film does a good job of exploring its central themes. However, some characters feel one-dimensional, which prevents the audience from fully investing in their journeys. Despite this, the film's strengths outweigh its weaknesses.",
      date: "2023-05-11"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % mockReviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [mockReviews.length]);

  const handleNext = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % mockReviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + mockReviews.length) % mockReviews.length);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        position: 'relative',
        width: '90%',
        height: '300px',
        overflow: 'hidden',
        margin: '30px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        {mockReviews.map((review, index) => (
          <div key={review.id} style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: `${(index - currentReview) * 100}%`,
            backgroundColor: '#f0f0f0',
            transition: 'left 0.5s ease-in-out',
            opacity: index === currentReview ? 1 : 0.5,
            borderRadius: '8px',
            boxShadow: index === currentReview ? '0px 10px 30px rgba(0,0,0,0.2)' : 'none',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflowY: 'auto',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <Avatar sx={{ width: 60, height: 60, marginRight: '15px' }}>
                {review.author.charAt(0)}
              </Avatar>
              <div>
                <h3 style={{ marginBottom:'5px', color:'#333', fontSize:'1.5em' }}>{review.author}</h3>
                <div style={{ display:'flex', alignItems:'center' }}>
                  <StarIcon sx={{ color:'#FFD700', marginRight:'5px' }} />
                  <span style={{ color:'green', fontSize:'1em' }}>{review.rating}/5</span>
                  <span style={{ marginLeft:'10px', color:'#666', fontSize:'1em' }}>Date: {review.date}</span>
                </div>
              </div>
            </div>
            <p style={{ color:'black', fontSize:'1.2em', lineHeight:'1.4em' }}>{review.content}</p>
          </div>
        ))}

        <Button
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '-20px',
            transform: 'translateY(-50%)',
            minWidth: '36px',
            padding: '6px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#ffffff',
            zIndex: '1',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.6)',
              left: '0',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
              transition: 'all .2s ease-in-out'
            }
          }}
        >
          <ArrowBack fontSize="small" />
        </Button>
        <Button
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '-20px',
            transform: 'translateY(-50%)',
            minWidth: '36px',
            padding: '6px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#ffffff',
            zIndex: '1',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.6)',
              right: '0',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
              transition: 'all .2s ease-in-out'
            }
          }}
        >
          <ArrowForward fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
