const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser')
const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true // Specify the HTTP methods allowed
};
app.use(express.json());


app.use(cors(corsOptions));

// Route handlers
app.use('/', require('./routes/authRoutes'));

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));