import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';


// Function to get rating color
const getRatingColor = (rating) => {
  if (rating >= 8) return '#4caf50';
  if (rating >= 6) return '#ffc107';
  return '#f44336';
};

// Movies component
const Movies = () => {
  const moviesData = [
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
      title: 'Interstellar',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45fc99105415493.619ded0619991.jpg',
      genre: 'Adventure',
      rating: 8.6,
    },
    {
      id: 4,
      title: 'Tenet',
      image: 'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      genre: 'Action',
      rating: 7.4,
    },
    {
      id: 5,
      title: 'MS Dhoni : The Untold Story',
      image: 'https://files.prokerala.com/movies/pics/800/ms-dhoni-the-untold-story-movie-poster-62780.jpg',
      genre: 'Sports/Biography',
      rating: 9.7,
    },
    {
      id: 6,
      title: 'Sita Ramam',
      image: 'https://th.bing.com/th/id/OIP.BvVfa1h-e0QJoa-MPlDNWQHaLH?rs=1&pid=ImgDetMain',
      genre: 'Pure Love/Romance',
      rating: 9.5,
    },
    {
      id: 7,
      title: 'Master',
      image: 'https://th.bing.com/th/id/OIP.o_qu45BE2G_pTcFFuo6MgQHaLH?w=1080&h=1620&rs=1&pid=ImgDetMain',
      genre: 'Action Drama',
      rating: 9.0,
    },
    {
      id: 8,
      title: 'Soorarai Pottru',
      image: 'https://m.media-amazon.com/images/M/MV5BOGVjYmM0ZWEtNTFjNi00MWZjLTk3OTItMmFjMDAzZWU1ZDVjXkEyXkFqcGdeQXVyMTI2Mzk1ODg0._V1_.jpg',
      genre: 'Drama',
      rating: 8.7,
    },
  ];
  
  return (
    <div style={{ backgroundColor: '#121212', padding: '20px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <div style={{ backgroundColor: '#000000', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              Tamil Movies
            </Typography>
            <Grid container spacing={4}>
              {moviesData.slice(4).map((movie) => (
                <Grid item xs={12} sm={6} md={3} key={movie.id}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#1e1e1e', borderRadius: '8px' }}>
                    <CardMedia component="img" height="350" image={movie.image} alt={movie.title} />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#ffffff' }}>{movie.title}</Typography>
                      <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: getRatingColor(movie.rating) }}>
                          <StarIcon fontSize="small" /> {movie.rating}/10
                        </span>
                        <span style={{ color: '#ffd700' }}>{movie.genre}</span>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link 
                        to={`/movie/${movie.id}`}
                        style={{ textDecoration: 'none', width: '100%' }}
                      >
                        <Button 
                          fullWidth 
                          sx={{ backgroundColor: '#3f51b5', color: '#ffffff' }}
                        >
                          Book Tickets
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Carousel />
        </Grid>
        <Grid item xs={12}>
          <div style={{ backgroundColor: '#000000', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
              English Movies
            </Typography>
            <Grid container spacing={4}>
              {moviesData.slice(0, 4).map((movie) => (
                <Grid item xs={12} sm={6} md={3} key={movie.id}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#1e1e1e', borderRadius: '8px' }}>
                    <CardMedia component="img" height="350" image={movie.image} alt={movie.title} />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#ffffff' }}>{movie.title}</Typography>
                      <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: getRatingColor(movie.rating) }}>
                          <StarIcon fontSize="small" /> {movie.rating}/10
                        </span>
                        <span style={{ color: '#ffd700' }}>{movie.genre}</span>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link 
                        to={`/movie/${movie.id}`}
                        style={{ textDecoration: 'none', width: '100%' }}
                      >
                        <Button 
                          fullWidth 
                          sx={{ backgroundColor: '#3f51b5', color: '#ffffff' }}
                        >
                          Book Tickets
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Movies;
