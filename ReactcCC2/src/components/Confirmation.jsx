import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { totalAmount } = location.state; // Get total amount from previous page

    useEffect(() => {
        // Trigger the sound at the same time the tick mark starts moving
        const timeout = setTimeout(() => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';  // Hide the iframe
            iframe.src = "https://www.youtube.com/embed/XX6dN_gruv8?si=iQLy0RrtC-vcYZvP&amp;autoplay=1&mute=0";  // Autoplay and unmute the video
            iframe.allow = "autoplay";
            document.body.appendChild(iframe);  // Append iframe to body

            return () => {
                document.body.removeChild(iframe);  // Cleanup when component unmounts
            };
        }, 500); // Delay sound by 500ms to sync with tick animation

        return () => clearTimeout(timeout);  // Cleanup on component unmount
    }, []);

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f9' }}>
            <Box sx={{ padding: '40px', borderRadius: '8px', backgroundColor: '#e0f7e0', boxShadow: 3, textAlign: 'center', position: 'relative' }}>
                
                {/* Tick Mark Animation */}
                <Box 
                    sx={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 20px',
                        borderRadius: '50%',
                        border: '4px solid #4caf50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        animation: 'scaleIn 1s ease-in-out',
                    }}
                >
                    <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#4caf50"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="checkmark"
                        style={{ animation: 'drawTick 0.5s ease-in-out 0.5s forwards' }}
                    >
                        <path d="M5 12.5L9 16.5L19 6.5" />
                    </svg>
                </Box>

                <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', color: '#2e7d32', marginBottom: '20px', animation: 'slideIn 2s ease-in-out' }}
                >
                    Payment Successful!
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ color: '#3c763d', marginBottom: '20px', animation: 'fadeIn 2s ease-in-out' }}
                >
                    You have successfully paid ₹{totalAmount}.
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ color: '#4caf50', marginBottom: '20px', animation: 'fadeIn 2s ease-in-out 1s' }}
                >
                    Enjoy the Movie!
                </Typography>
                <Button 
                    variant="contained" 
                    color="success" 
                    onClick={() => navigate('/')}
                    sx={{ animation: 'fadeIn 2s ease-in-out 1.5s' }}
                >
                    Go to Home
                </Button>
            </Box>
        </Box>
    );
};

// Adding CSS animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes scaleIn {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes drawTick {
        0% {
            stroke-dasharray: 0 100;
        }
        100% {
            stroke-dasharray: 100 0;
        }
    }
`;
document.head.appendChild(style);

export default Confirmation;
