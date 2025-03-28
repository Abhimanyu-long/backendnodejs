import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import User from './Schema/userSchema.js';

// Load environment variables from .env
dotenv.config();

// MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error);
    process.exit(1); // Exit on failure
  }
};

connectDB();

const app = express();
const port = 4000;

// Body parser middleware to parse POST request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up views directory (if you're using a view engine like EJS)
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the login template HTML
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'htmlTemplate', 'loginTemplate.html');
  res.sendFile(filePath);  // Sends the loginTemplate.html file to the client
});

app.get('/register', (req, res) => {
  const filePath = path.join(__dirname, 'htmlTemplate', 'registerTemplate.html');
  res.sendFile(filePath);  // Sends the loginTemplate.html file to the client
});

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("Register data", username, email, password);
    // Check if the email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "Username or email already exists" });
    }
    // Create a new user without hashing the password
    const newUser = new User({
      username,
      email,
      password,  // Storing the plain password
    });
    // Save the user to the database
    const user= await newUser.save();
    res.status(201).json({ message: `Registration successful${user}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });  // Fixed error handling
  }
});


app.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body;
    console.log("my first login page", identifier, password);
    // Query the database for a user by either email or username
    const existingUser = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }]
    });
    // If no user is found, send a login failure response
    if (!existingUser) {
      return res.status(400).json({ message: "Login failed. User not found." });
    }
    // Check if the password matches (currently checking plain text, should hash passwords)
    if (existingUser.password !== password) {
      return res.status(400).json({ message: "Login failed. Incorrect password." });
    }
    // If login is successful, send a success response
    res.status(200).send("Login successful");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
