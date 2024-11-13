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

  const ConcertsSection = () => {
    const concerts = [
      {
        id: 1,
        title: 'Hip Hop Tamizha',
        image: 'https://i.pinimg.com/474x/69/33/79/693379f6f31e60d6809ae61677529fdb.jpg',
        genre: 'Hip Hop',
        rating: 9.2,
      },
      {
        id: 2,
        title: 'Anirudh',
        image: 'https://th.bing.com/th/id/OIP.RtGbC5gqP3KGr0dm9VtqNQHaKs?rs=1&pid=ImgDetMain',
        genre: 'Film Music',
        rating: 8.9,
      },
      {
        id: 3,
        title: 'U1',
        image: 'https://th.bing.com/th/id/OIP.eCrR0Ac47rBuCjk1g6FivgHaJQ?rs=1&pid=ImgDetMain',
        genre: 'Film Music',
        rating: 9.5,
      },
      {
        id: 4,
        title: 'Andrea Jeremiah',
        image: 'https://th.bing.com/th/id/OIP.Gj9Rm4BR0-i9f71ZY1xImQHaJQ?rs=1&pid=ImgDetMain',
        genre: 'Pop/Playback',
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
        backgroundColor: 'black',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '24px',
        borderRadius: '8px',
      }}>
        <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 4, fontWeight: 'bold', color: '#ffffff' }}>
          Popular Concerts
        </Typography>
        <Grid container spacing={4}>
          {concerts.map((concert) => (
            <Grid item xs={12} sm={6} md={3} key={concert.id}>
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
                  image={concert.image}
                  alt={concert.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                    {concert.title}
                  </Typography>
                  <Typography variant="body2" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '12px'
                  }}>
                    <span style={{ color: getRatingColor(concert.rating), fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                      <StarIcon style={{ fontSize: '20px', marginRight: '4px' }} /> {concert.rating}/10
                    </span>
                    <span style={{ color: '#ffd700', fontWeight: 'bold' }}>
                      {concert.genre}
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

  export default ConcertsSection;