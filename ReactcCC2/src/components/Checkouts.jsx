import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    Paper,
    FormControl,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
} from "@mui/material";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { totalAmount } = location.state;
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        upiId: "",
        wallet: "",
        bank: "",
        installment: false,
        accountNumber: "",
        ifscCode: "",
        giftCardCode: "",
    });

    const [foodItems, setFoodItems] = useState([
        { id: 1, name: 'Popcorn', price: 100, quantity: 0, image: 'https://th.bing.com/th/id/OIP.rSadPuETwa1r6CZsZDdVfAHaJl?rs=1&pid=ImgDetMain' },
        { id: 2, name: 'Soda', price: 50, quantity: 0, image: 'https://i5.walmartimages.com/asr/1267a56f-0cc1-497e-8c2e-2264177f1be6.57af8af07648772234f02377d6c78865.jpeg' },
        { id: 3, name: 'Nachos', price: 150, quantity: 0, image: 'https://static.vecteezy.com/system/resources/previews/024/508/902/non_2x/nachos-isolated-on-background-with-generative-ai-png.png' },
        { id: 4, name: 'Hot Dog', price: 120, quantity: 0, image: 'https://static.vecteezy.com/system/resources/previews/021/952/576/non_2x/free-spicy-hot-dog-hot-dog-transparent-background-free-png.png' },
        { id: 5, name: 'Candy', price: 80, quantity: 0, image: 'https://static.vecteezy.com/system/resources/previews/030/809/566/non_2x/lollipop-sugar-no-background-png.png' },
        { id: 6, name: 'Ice Cream', price: 90, quantity: 0, image: 'https://th.bing.com/th/id/OIP.zNXY5_8X_2s05-itpZf4iQHaLT?rs=1&pid=ImgDetMain' },
    ]);

    const handleAddItem = (id) => {
        setFoodItems(foodItems.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const foodTotal = foodItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const finalTotal = totalAmount + foodTotal;

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };
    const handleRemoveItem = (id) => {
        setFoodItems(foodItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        ));
    };
    
    const handlePlaceOrder = () => {
        alert(`Payment successful for ₹${finalTotal}!`);
        navigate('/confirmation', { state: { totalAmount: finalTotal } });
    };

    return (
        <Box sx={{ minHeight: '100vh', padding: '20px', backgroundColor: 'rgb(18,18,18)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', marginX:'auto', marginBottom:'20px' }}>
                <Box sx={{ width:'48%', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '16px' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight:'bold', color:'#1976d2', textAlign:'center' }}>
                        Food Menu
                    </Typography>
                    <Grid container spacing={2}>
                        {foodItems.map((item) => (
                            <Grid item xs={4} key={item.id}>
                                <Paper elevation={3} sx={{ padding:'5px', textAlign:'center' }}>
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        style={{ width:'100%', height:'80px', objectFit:'contain', marginBottom:'5px' }} 
                                    />
                                    <Typography variant="subtitle2">{item.name} ₹{item.price}</Typography>
                                    
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
                                        <Button 
                                            variant="contained" 
                                            size="small"
                                            onClick={() => handleRemoveItem(item.id)}
                                            sx={{ fontSize: '0.7rem', minWidth: '30px', padding: '2px' }}
                                            disabled={item.quantity === 0}
                                        >
                                            -
                                        </Button>
                                        <Typography variant="body2" sx={{ margin: '0 8px' }}>
                                            {item.quantity}
                                        </Typography>
                                        <Button 
                                            variant="contained" 
                                            size="small"
                                            onClick={() => handleAddItem(item.id)}
                                            sx={{ fontSize: '0.7rem', minWidth: '30px', padding: '2px' }}
                                        >
                                            +
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ width:'48%' }}>
                    <Paper elevation={8} sx={{ padding:'24px', borderRadius:'12px', boxShadow:'0 4px 20px rgba(0,0,0,0.2)', backgroundColor:'#ffffff' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight:'bold', marginBottom:'16px', color:'#1976d2', textAlign:'center' }}>
                            Checkout
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight:'bold', marginBottom:'16px', textAlign:'center', color:'#333' }}>
                            Total Amount : ₹{finalTotal}
                        </Typography>

                        <FormControl component="fieldset" fullWidth sx={{ marginBottom:'24px' }}>
                            <FormLabel component="legend" sx={{ fontWeight:'bold', color:'#555'}}>Select Payment Method</FormLabel>
                            <RadioGroup
                                aria-label="payment-method"
                                name="payment-method"
                                value={selectedPaymentMethod}
                                onChange={handlePaymentMethodChange}
                            >
                                {/* Payment method options */}
                                {/* Card Payment */}
                                <FormControlLabel
                                    value="card"
                                    control={<Radio sx={{ '&.Mui-checked': { color:'#1976d2' } }} />}
                                    label="Credit/Debit Card"
                                />
                                {selectedPaymentMethod === "card" && (
                                    <Box sx={{ padding:'16px', backgroundColor:'#f7f7f7', borderRadius:'8px', border:'1px solid #ccc' }}>
                                        <TextField
                                            label="Card Number"
                                            name="cardNumber"
                                            fullWidth
                                            margin="normal"
                                            value={paymentDetails.cardNumber}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            sx={{ backgroundColor:'#fff' }}
                                        />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label="Expiry Date (MM/YY)"
                                                    name="expiryDate"
                                                    fullWidth
                                                    value={paymentDetails.expiryDate}
                                                    onChange={handleInputChange}
                                                    variant="outlined"
                                                    sx={{ backgroundColor:'#fff' }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label="CVV"
                                                    name="cvv"
                                                    fullWidth
                                                    value={paymentDetails.cvv}
                                                    onChange={handleInputChange}
                                                    variant="outlined"
                                                    sx={{ backgroundColor:'#fff' }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}

                                {/* UPI Payment */}
                                <FormControlLabel
                                    value="upi"
                                    control={<Radio sx={{ '&.Mui-checked': { color:'#1976d2' } }} />}
                                    label="UPI"
                                />
                                {selectedPaymentMethod === "upi" && (
                                    <Box sx={{ padding:'16px', backgroundColor:'#f7f7f7', borderRadius:'8px', border:'1px solid #ccc' }}>
                                        <TextField
                                            label="UPI ID"
                                            name="upiId"
                                            fullWidth
                                            margin="normal"
                                            value={paymentDetails.upiId}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            sx={{ backgroundColor:'#fff' }}
                                        />
                                    </Box>
                                )}

                                {/* Wallet Payment */}
                                <FormControlLabel
                                    value="wallet"
                                    control={<Radio sx={{ '&.Mui-checked': { color:'#1976d2' } }} />}
                                    label="Wallets (PhonePe, GPay, Paytm)"
                                />
                                {selectedPaymentMethod === "wallet" && (
                                    <FormControl fullWidth sx={{ marginTop:'16px' }}>
                                        <InputLabel>Select Wallet</InputLabel>
                                        <Select
                                            value={paymentDetails.wallet}
                                            onChange={handleInputChange}
                                            name="wallet"
                                            fullWidth
                                            variant="outlined"
                                            sx={{ backgroundColor:'#fff' }}
                                        >
                                            <MenuItem value="phonepe">PhonePe</MenuItem>
                                            <MenuItem value="gpay">Google Pay (GPay)</MenuItem>
                                            <MenuItem value="paytm">Paytm</MenuItem>
                                        </Select>
                                    </FormControl>
                                )}

                                {/* Net Banking */}
                                <FormControlLabel
                                    value="netbanking"
                                    control={<Radio sx={{ '&.Mui-checked': { color:'#1976d2' } }} />}
                                    label="Net Banking"
                                />
                                {selectedPaymentMethod === "netbanking" && (
                                    <FormControl fullWidth sx={{ marginTop:'16px' }}>
                                        <InputLabel>Select Bank</InputLabel>
                                        <Select
                                            value={paymentDetails.bank}
                                            onChange={handleInputChange}
                                            name="bank"
                                            fullWidth
                                            variant="outlined"
                                            sx={{ backgroundColor:'#fff' }}
                                        >
                                            <MenuItem value="hdfc">HDFC</MenuItem>
                                            <MenuItem value="icici">ICICI</MenuItem>
                                            <MenuItem value="sbi">State Bank of India (SBI)</MenuItem>
                                            <MenuItem value="axis">Axis Bank</MenuItem>
                                        </Select>
                                    </FormControl>
                                )}
                            </RadioGroup>
                        </FormControl>

                        {/* Place Order Button */}
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                marginTop:'24px',
                                borderRadius:'8px',
                                backgroundColor:'#1976d2',
                                '&.MuiButton-root:hover': {
                                    backgroundColor:'#155a8a'
                                }
                            }}
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </Button>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;