  import React from 'react';
  import Typography from '@mui/material/Typography';
  import Grid from '@mui/material/Grid';
  import Card from '@mui/material/Card';
  import CardMedia from '@mui/material/CardMedia';
  import CardContent from '@mui/material/CardContent';
  import CardActions from '@mui/material/CardActions';
  import Button from '@mui/material/Button';
  import StarIcon from '@mui/icons-material/Star';
  import Box from '@mui/material/Box';

  const WebSeriesSection = () => {
    const webSeries = [
      {
        id: 1,
        title: 'Stranger Things',
        image: 'https://th.bing.com/th/id/OIP.ehvTPrWQ-Ef7jck1AdEghwHaK9?rs=1&pid=ImgDetMain',
        genre: 'Sci-Fi & Horror',
        rating: 8.7,
      },
      {
        id: 2,
        title: 'Breaking Bad',
        image: 'https://th.bing.com/th/id/OIP.ksiEzypIegOWpSIbBLnOVAHaLH?rs=1&pid=ImgDetMain',
        genre: 'Crime Drama',
        rating: 9.5,
      },
      {
        id: 3,
        title: 'The Crown',
        image: 'https://m.media-amazon.com/images/M/MV5BYTkzNWVkYmYtNjliMS00ZWM1LWI3YmYtNjg3ZjU1MzRiOGU1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
        genre: 'Historical Drama',
        rating: 8.6,
      },
      {
        id: 4,
        title: 'The Mandalorian',
        image: 'https://th.bing.com/th/id/OIP.1uqkZaYlmEj_6p67-A4bpwHaJ4?rs=1&pid=ImgDetMain',
        genre: 'Space Western',
        rating: 8.8,
      },
    ];

    const getRatingColor = (rating) => {
      if (rating >= 9) return '#4caf50';
      if (rating >= 7) return '#ff9800';
      return '#f44336';
    };

    return (
      <Box sx={{
        backgroundColor: '#000000',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '24px',
        borderRadius: '8px',
      }}>
        <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 4, fontWeight: 'bold', color: '#ffffff' }}>
          Popular Web Series
        </Typography>
        <Grid container spacing={4}>
          {webSeries.map((series) => (
            <Grid item xs={12} sm={6} md={3} key={series.id}>
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
                  image={series.image}
                  alt={series.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                    {series.title}
                  </Typography>
                  <Typography variant="body2" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '12px'
                  }}>
                    <span style={{ color: getRatingColor(series.rating), fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                      <StarIcon style={{ fontSize: '20px', marginRight: '4px' }} /> {series.rating}/10
                    </span>
                    <span style={{ color: '#ffd700', fontWeight: 'bold' }}>
                      {series.genre}
                    </span>
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: '16px' }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#3f51b5',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: '#303f9f',
                        boxShadow: '0 0 10px rgba(63, 81, 181, 0.5)'
                      }
                    }}
                  >
                    Watch Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
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
      </Box>
    );
  };

  export default WebSeriesSection;