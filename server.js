// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// GET endpoint
app.get('/BAJAJ', (req, res) => {
    return res.status(200).json({
        operation_code: 1
    });
});

// POST endpoint
app.post('/BAJAJ', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input format"
            });
        }

        // Process data
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item) && item.length === 1);
        const highest_alphabet = alphabets.length > 0 ? 
            [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

        return res.status(200).json({
            is_success: true,
            user_id: "SeyjalKhatri", // Replace with your details
            email: "22BCS16746@cuchd.in", // Replace with your email
            roll_number: "22BCS16746", // Replace with your roll number
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        return res.status(500).json({
            is_success: false,
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});