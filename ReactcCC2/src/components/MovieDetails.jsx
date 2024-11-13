import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Container, Grid, Paper, Card, CardMedia, Avatar, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { moviesData } from '../data/movieData';
import Carousel from './reviews';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = moviesData.find(m => m.id === parseInt(id));

  const getRatingColor = (rating) => {
    if (rating >= 8) return '#4caf50';
    if (rating >= 6) return '#ffc107';
    return '#f44336';
  };

  const CastCrewSection = ({ title, people }) => (
    <Paper
      elevation={3}
      sx={{
        padding: '20px',
        backgroundColor: '#2a2a2a',
        color: '#ffffff',
        width: '90%',
        margin: '20px auto',
        borderRadius: '12px',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          borderBottom: '2px solid #3a3a3a',
          paddingBottom: '10px',
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {people.map((person, index) => (
          <Grid item xs={6} sm={4} md={2} key={index} sx={{ textAlign: 'center' }}>
            <Avatar
              alt={person.name}
              src={person.image}
              sx={{
                width: 90,
                height: 90,
                margin: '0 auto',
                border: '2px solid #3a3a3a',
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{ mt: 1, fontWeight: 'bold', color: '#e0e0e0' }}
            >
              {person.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
              {person.role}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  if (!movie) {
    return <Typography variant="h5" color="error">Movie not found</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: '#ffffff', marginTop: '0', paddingTop: '40px' }}>
      {/* Movie Banner */}
      <Box
        sx={{
          backgroundColor: '#000',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          width: '90%',
          margin: '40px auto',
        }}
      >
        <Box
          sx={{
            backgroundImage: `linear-gradient(90deg, rgba(26, 26, 26, 0.9) 0%, rgba(26, 26, 26, 0.7) 50%, rgba(26, 26, 26, 0.4) 100%), url(${movie.pic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: { xs: '300px', md: '500px' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container sx={{ width: '90%', margin: '0 auto' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    height: { xs: '300px', md: '450px' },
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={movie.image}
                    alt={movie.title}
                    sx={{ borderRadius: '8px', objectFit: 'cover' }}
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  {movie.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StarIcon sx={{ color: getRatingColor(movie.rating), mr: 1 }} />
                  <Typography variant="h5">{movie.rating}/10</Typography>
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    (57.4K Votes)
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: '#ffd700', mb: '8px' }}>
                  {movie.genre}
                </Typography>

                {/* Link to Theaters */}
                <Link
                  to={`/theaters/${movie.id}`}
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 2,
                      backgroundColor: '#e50914',
                      '&:hover': {
                        backgroundColor: '#b20710',
                      },
                    }}
                  >
                    Book Tickets
                  </Button>
                </Link>

                {/* About the Movie */}
                <Typography
                  variant="h5"
                  sx={{
                    mt: 4,
                    borderBottom: '2px solid #3a3a3a',
                    pb: 2,
                    color: '#e0e0e0',
                  }}
                >
                  About the movie
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, color: '#bdbdbd' }}
                >
                  {movie.description}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Trailer Section */}
      <Box
  sx={{
    backgroundColor: '#000',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '12px',
    width: '90%',
    margin: '40px auto',
    padding: '20px',
  }}
>
  <Typography
    variant="h5"
    sx={{
      borderBottom: '2px solid #3a3a3a',
      paddingBottom: '10px',
      marginBottom: '20px',
      color: '#ffffff',
    }}
  >
    Trailer
  </Typography>

  {/* Embed the Trailer */}
  <Box
    sx={{
      position: 'relative',
      paddingBottom: '42.25%', // Reduced height for the video
      height: 0,
      overflow: 'hidden',
      maxWidth: '100%',
      backgroundColor: '#000',
    }}
  >
    <iframe
      src={movie.trailer}
      title={`${movie.title} Trailer`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    ></iframe>
  </Box>
</Box>


      {/* Cast and Crew Sections */}
      <Box
        sx={{
          backgroundColor: '#000',
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: '12px',
          width: '90%',
          margin: '40px auto',
          padding: '20px',
        }}
      >
        <CastCrewSection title="Cast" people={movie.cast} />
        <CastCrewSection title="Crew" people={movie.crew} />
      </Box>

      {/* Carousel Component */}
      <Carousel />
    </Box>
  );
};

export default MovieDetails;
