import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { moviesData } from '../data/movieData';
import {
    Typography,
    Container,
    Grid,
    Paper,
    Card,
    MenuItem,
    CardMedia,
    TextField,
    FormControl,
    InputLabel,
    Select,
    Button,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { theatersData } from "../data/Theatres";

const TheaterSeating = ({ selectedSeats, handleSeatClick }) => {
    const rows = 10;
    const seatsPerRow = 10;
    const alphabet = "ABCDEFGHIJ";

    const getSeatPrice = (rowIndex) => {
        if (rowIndex < 3) {
            return 60;
        } else if (rowIndex >= 3 && rowIndex < 7) {
            return 200;
        } else {
            return 180;
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
            <Typography variant="h6">Select Seats</Typography>
            <Box sx={{ width: '100%', height: '5px', backgroundColor: '#ffffff', marginBottom: '16px' }}></Box>
            <Typography variant="body1" sx={{ color: '#fff', marginBottom: '16px' }}>
                Screen
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <Box key={rowIndex} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1 }}>
                        <Typography variant="body1" sx={{ marginRight: 1, color: '#ffffff' }}>{alphabet[rowIndex]}</Typography>
                        {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
                            const seatLabel = `${alphabet[rowIndex]}${seatIndex + 1}`;
                            const seatPrice = getSeatPrice(rowIndex);
                            const isCenterRow = rowIndex >= 3 && rowIndex < 7;
                            const isVerticalSpace = seatIndex === 3 || seatIndex === 7;
                            const isHorizontalSpace = seatIndex === 3 || seatIndex === 7;

                            return (
                                <React.Fragment key={seatLabel}>
                                    {isVerticalSpace && isHorizontalSpace && <Box sx={{ width: '20px' }}></Box>}
                                    <Button
                                        variant={selectedSeats.includes(seatLabel) ? 'contained' : 'outlined'}
                                        onClick={() => handleSeatClick(seatLabel)}
                                        sx={{
                                            width: '36px',
                                            height: '34px',
                                            margin: '0 2px',
                                            backgroundColor: selectedSeats.includes(seatLabel)
                                                ? '#ff4081'
                                                : isCenterRow ? '#FFD43A'
                                                : '#ffffff',
                                            color: selectedSeats.includes(seatLabel) ? '#ffffff' : '#000000',
                                            position: 'relative',
                                            '&:hover': {
                                                backgroundColor: selectedSeats.includes(seatLabel)
                                                    ? '#e91e63'
                                                    : isCenterRow ? '#fff59d'
                                                    : '#e0e0e0',
                                            },
                                            '&:hover::before': isCenterRow ? {
                                                content: '"Best experience seats"',
                                                position: 'absolute',
                                                bottom: '110%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: '#333',
                                                color: '#fff',
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontSize: '12px',
                                                whiteSpace: 'nowrap',
                                            } : {},
                                        }}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <Typography variant="body2">{seatLabel}</Typography>
                                            <Typography variant="caption" sx={{ fontSize: '10px' }}>₹{seatPrice}</Typography>
                                        </div>
                                    </Button>
                                </React.Fragment>
                            );
                        })}
                    </Box>
                ))}
                <Box sx={{ height: '39px' }}></Box>
            </Box>
        </Box>
    );
};

const Theaters = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = moviesData.find(m => m.id === parseInt(id));

    const [openBookingDialog, setOpenBookingDialog] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [bookingId, setBookingId] = useState('');
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedTheater, setSelectedTheater] = useState(null); // Store the selected theater

    if (!movie) {
        return (
            <Container>
                <Typography variant="h5" color="error">
                    Movie details not available. Please go back to the previous page.
                </Typography>
            </Container>
        );
    }

    const handleBookNowClick = (theater) => {
        setSelectedTheater(theater); // Set the selected theater when "Book Now" is clicked
        setOpenBookingDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenBookingDialog(false);
        setSelectedDate(dayjs());
        setSelectedTime('');
        setSelectedSeats([]);
    };

    const handleSeatClick = (seat) => {
        setSelectedSeats(prev => {
            if (prev.includes(seat)) {
                return prev.filter(s => s !== seat);
            }
            return [...prev, seat];
        });
    };

    const calculateTotalAmount = () => {
        return selectedSeats.reduce((total, seat) => {
            const rowIndex = seat.charCodeAt(0) - 65;
            if (rowIndex < 3) {
                return total + 60;
            } else if (rowIndex >= 3 && rowIndex < 7) {
                return total + 200;
            } else {
                return total + 180;
            }
        }, 0);
    };

    const handleConfirmBooking = () => {
        const generatedBookingId = `BKG${Math.floor(100000 + Math.random() * 900000)}`; // Generate random booking ID
        setBookingId(generatedBookingId);
        setOpenConfirmDialog(true);
    };

    const handleProceedToCheckout = () => {
        const totalAmount = calculateTotalAmount();
        navigate('/checkout', {
            state: {
                date: selectedDate.format('YYYY-MM-DD'),
                time: selectedTime,
                seats: selectedSeats,
                totalAmount: totalAmount,
                movieTitle: movie.title,
                bookingId: bookingId,
                theaterName: selectedTheater.name, // Pass the theater name
            }
        });
        setOpenConfirmDialog(false);
        handleCloseDialog();
    };

    return (
        <div style={{ backgroundColor: '#1c1c1c', minHeight: '100vh', padding: '20px 0' }}>
            <Container sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ marginBottom: '20px', padding: '24px', backgroundColor: '#2a2a2a', borderRadius: '8px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', boxShadow: '0 8px 16px rgba(0,0,0,.3)' }}>
                                <CardMedia
                                    component='img'
                                    height='100%'
                                    image={movie.image}
                                    alt={movie.title}
                                    sx={{ borderRadius: '8px', objectFit: 'cover' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                                {movie.title}
                            </Typography>
                            <Typography variant='body1' sx={{ color: '#bdbdbd', marginBottom: '16px' }}>
                                {movie.description}
                            </Typography>
                            
                                                        <Box sx={{ marginTop: '16px', marginBottom: '16px' }}>
                                                            <Card>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="400px"
                                                                    image="https://techstory.in/wp-content/uploads/2021/09/Flipkart-Big-Billion-Days-2021.jpg"
                                                                    alt="Advertisement"
                                                                />
                                                            </Card>
                                                        </Box>
                            
                        </Grid>
                    </Grid>
                </Paper>

                <Box sx={{ backgroundColor: '#2e2e2e', padding: '24px', borderRadius: '8px' }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                        Theaters showing {movie.title}
                    </Typography>
                    <Grid container spacing={3}>
                        {theatersData.map((theater) => (
                            <Grid item xs={12} md={6} key={theater.id}>
                                <Paper elevation={3} sx={{ padding: "16px", backgroundColor: '#3a3a3a', color: '#fff', borderRadius: '8px' }}>
                                    <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
                                        {theater.name}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ marginTop: "8px", backgroundColor: '#3f51b5', color: '#ffffff' }}
                                        onClick={() => handleBookNowClick(theater)} // Pass the theater to "Book Now" click
                                    >
                                        Book Now
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* Booking dialog */}
            <Dialog open={openBookingDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
    <DialogTitle sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
        Book Tickets
    </DialogTitle>
    <DialogContent sx={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => {
                    if (newValue && dayjs.isDayjs(newValue)) {
                        setSelectedDate(newValue);
                    }
                }}
                renderInput={(params) => (
                    <TextField 
                        {...params} 
                        fullWidth 
                        sx={{ marginBottom: 2 }} 
                        variant="outlined" 
                        InputProps={{
                            style: { borderRadius: '8px' } // Rounded corners
                        }} 
                    />
                )}
            />
        </LocalizationProvider>

        <Dialog open={openBookingDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
    <DialogTitle sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
        Book Tickets
    </DialogTitle>
    <DialogContent sx={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ marginBottom: 2 }}>
                <InputLabel sx={{ marginBottom: 1 }}>Select Date</InputLabel>
                <DatePicker
                    value={selectedDate}
                    onChange={(newValue) => {
                        if (newValue && dayjs.isDayjs(newValue)) {
                            setSelectedDate(newValue);
                        }
                    }}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            fullWidth 
                            variant="outlined" 
                            InputProps={{
                                style: { borderRadius: '8px' } // Rounded corners
                            }} 
                        />
                    )}
                />
            </Box>
        </LocalizationProvider>

        <Box sx={{ marginBottom: 2 }}>
            <InputLabel sx={{ marginBottom: 1 }}>Select Time</InputLabel>
            <FormControl fullWidth>
                <Select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#1976d2', // Custom border color
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#2196f3', // Border color on hover
                        },
                        '& .MuiSvgIcon-root': {
                            color: '#1976d2', // Dropdown icon color
                        },
                    }}
                >
                    <MenuItem value={"10:00 AM"}>10:00 AM</MenuItem>
                    <MenuItem value={"1:00 PM"}>1:00 PM</MenuItem>
                    <MenuItem value={"4:00 PM"}>4:00 PM</MenuItem>
                    <MenuItem value={"7:00 PM"}>7:00 PM</MenuItem>
                </Select>
            </FormControl>
        </Box>

        {/* Theater Seating */}
        <TheaterSeating selectedSeats={selectedSeats} handleSeatClick={handleSeatClick} />
    </DialogContent>

    <DialogActions sx={{ padding: '16px', justifyContent: 'center' }}>
        <Button onClick={handleCloseDialog} variant="outlined" color="error" sx={{ marginRight: 1 }}>
            Cancel
        </Button>
        <Button onClick={handleConfirmBooking} variant="contained" color="primary">
            Confirm Booking
        </Button>
    </DialogActions>
</Dialog>

    </DialogContent>

    <DialogActions sx={{ padding: '16px', justifyContent: 'center' }}>
        <Button onClick={handleCloseDialog} variant="outlined" color="error" sx={{ marginRight: 1 }}>
            Cancel
        </Button>
        <Button onClick={handleConfirmBooking} variant="contained" color="primary">
            Confirm Booking
        </Button>
    </DialogActions>
</Dialog>

            {/* Confirmation dialog */}
            <Dialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)} maxWidth="sm" fullWidth>
    <DialogTitle sx={{ backgroundColor: '#4caf50', color: '#fff', textAlign: 'center' }}>
        Booking Confirmed!
    </DialogTitle>
    <DialogContent sx={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Box sx={{ marginBottom: 2, padding: 2, border: '1px solid #4caf50', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                Booking ID: {bookingId}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
                Theater: {selectedTheater?.name}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
                Date: {selectedDate.format('YYYY-MM-DD')}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
                Time: {selectedTime}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
                Seats: {selectedSeats.join(', ')}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                Total Amount: ₹{calculateTotalAmount()}
            </Typography>
        </Box>
    </DialogContent>
    <DialogActions sx={{ padding: '16px', justifyContent: 'center' }}>
        <Button onClick={() => setOpenConfirmDialog(false)} variant="outlined" color="error" sx={{ marginRight: 1 }}>
            Cancel
        </Button>
        <Button onClick={handleProceedToCheckout} variant="contained" color="primary">
            Proceed to Checkout
        </Button>
    </DialogActions>
</Dialog>

        </div>
    );
};

export default Theaters;
