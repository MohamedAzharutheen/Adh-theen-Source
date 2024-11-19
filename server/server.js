const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bannerRoutes = require('./routes/bannerroutes');
const packageRoutes = require('./routes/packageroutes');
const userRoutes = require('./routes/userroutes');
const galleryRoutes = require('./routes/galleryroutes');
const session = require('express-session');
const MongoStore = require('connect-mongo');
dotenv.config();
const app = express();

// CORS configuration
// const corsOptions = {
//   origin: 'https://adh-theen-frontned.vercel.app', // your frontend's origin
//   credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// };
// app.use(cors(corsOptions));
const corsOptions = {
  origin: process.env.NODE_ENV === "production"
    ? "https://adh-theen-frontend.vercel.app" // Correct production frontend URL
    : "http://localhost:8080", // Development frontend URL
  credentials: true, // Allow cookies
};

app.use(cors(corsOptions));


// Check if in production environment
const isProduction = process.env.NODE_ENV === 'production';

app.use(session({
  secret: process.env.SESSION_SECRET || 'Y4z7mQ!f3J&*T0$eR1P5v%#p1x!fq',
  resave: false,
  saveUninitialized: false,
  store:MongoStore.create({
    mongoUrl: process.env.MONGODB_URI_PROD,
    collectionName: 'sessions', // Optional: Set the MongoDB collection for sessions
    ttl: 1800, // Time-to-live in seconds (30 minutes)
  }),
  cookie: {
    httpOnly: true,
    // secure: isProduction, // Use secure cookies in production
    secure: process.env.NODE_ENV === 'production', // Secure cookies in production
    // sameSite: isProduction ? 'None' : 'Lax', // None for production, Lax for development
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    maxAge: 1800000, // 30 minutes in milliseconds
  },
}));
/// Middilever setup
app.use(express.json());
// server  Port 
const PORT = process.env.PORT || 5003

// Determine the correct MongoDB URI based on the environment
const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI_PROD // Use production MongoDB URI
    : process.env.MONGODB_URI_DEV; // Use development MongoDB URI (localhost)


    console.log('Environment:', process.env.NODE_ENV);
    console.log('Connecting to MongoDB URI:', mongoURI);
    
    mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));




app.use('/api/banner',bannerRoutes);
app.use('/api/package',packageRoutes);
app.use('/api/user',userRoutes);
app.use('/api/gallery',galleryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
