import React from 'react';
import { Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'

const movies = [
  {
    id: 1,
    title: 'Inception',
    image: 'https://th.bing.com/th/id/OIP.vnJImFIy1GEoBBAjyZ-tfQHaK-?rs=1&pid=ImgDetMain',
    genre: 'Science Fiction',
    rating: 8.8,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    image: 'https://th.bing.com/th/id/OIP.Pom1FqqI1CUSY49ja9pFCQHaLH?w=640&h=960&rs=1&pid=ImgDetMain',
    genre: 'Action',
    rating: 9.0,
  },
  {
    id: 3,
    title: 'MS Dhoni : The Untold Story',
    image: 'https://files.prokerala.com/movies/pics/800/ms-dhoni-the-untold-story-movie-poster-62780.jpg',
    genre: 'Sports/Biography',
    rating: 9.7,
  },
  {
    id: 4,
    title: 'Sita Ramam',
    image: 'https://th.bing.com/th/id/OIP.BvVfa1h-e0QJoa-MPlDNWQHaLH?rs=1&pid=ImgDetMain',
    genre: 'Pure Love/Romance',
    rating: 9.5,
  },
];

const getRatingColor = (rating) => {
  if (rating >= 8.5) return '#4caf50';
  if (rating >= 7.0) return '#ff9800';
  return '#f44336';
};

const MovieCards = () => {
  return (
    <div style={{ backgroundColor: '#000000', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold', color: '#ffffff' }}>
        Featured Movies
      </Typography>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: '#1e1e1e',
              '&:hover': {
                boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 0 20px rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.03)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
              }
            }}>
              <CardMedia
                component="img"
                height="350"
                image={movie.image}
                alt={movie.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  {movie.title}
                </Typography>
                <Typography variant="body2" sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px'
                }}>
                  <span style={{ color: getRatingColor(movie.rating), fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <StarIcon style={{ fontSize: '20px', marginRight: '4px' }} /> {movie.rating}/10
                  </span>
                  <span style={{ color: '#ffd700', fontWeight: 'bold' }}>
                    {movie.genre}
                  </span>
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: '16px' }}>
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to='/movies'
                  sx={{
                    backgroundColor: '#3f51b5',
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#303f9f',
                      boxShadow: '0 0 10px rgba(63, 81, 181, 0.5)'
                    }
                  }}
                >
                  Book Tickets
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          component={Link}
          to="/movies"
          sx={{
            backgroundColor: '#3f51b5',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#303f9f',
              boxShadow: '0 0 10px rgba(63, 81, 181, 0.5)'
            }
          }}
        >
          See More
        </Button>
      </Grid>
    </div>
  );
};

export default MovieCards;
