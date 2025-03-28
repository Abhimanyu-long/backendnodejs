import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import { dirname } from 'path';
import User from './Schema/userSchema.js';
import Contact from './Schema/contactSchema.js';

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
app.use(session({
  secret: 'SDFSDGDDGDGS',  // Use a strong secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // If using HTTPS, set `secure: true`
}));

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure views are in the correct folder

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

app.get('/forgot-password', (req, res) => {
  const filePath = path.join(__dirname, 'htmlTemplate', 'forgotPasswordTemplate.html');
  res.sendFile(filePath);  // Sends the loginTemplate.html file to the client
});

app.get('/terms', (req, res) => {
  const filePath = path.join(__dirname, 'htmlTemplate', 'termOfUseTemplate.html');
  res.sendFile(filePath);  // Sends the loginTemplate.html file to the client
});

app.get('/privacy', (req, res) => {
  const filePath = path.join(__dirname, 'htmlTemplate', 'privacyTemplate.html');
  res.sendFile(filePath);  // Sends the loginTemplate.html file to the client
});

app.get('/contact', (req, res) => {
  const filePath = path.join(__dirname, 'htmlTemplate', 'contactusTemplate.html');
  res.sendFile(filePath);  // Sends the loginTemplate.html file to the client
});

app.get('/admin', (req, res)=>{
  const filePath = path.join(__dirname, 'htmlTemplate', 'adminTemplate.html');
  res.sendFile(filePath)
})

app.post('/forgot-password', async (req, res)=>{
  try{
    const {email} = req.body;

    const existingUserEmail = await User.find({email:email});

    if(!existingUserEmail){
      res.status(400).json({message: "invalid email"});
    }

    res.status(200).json({message: "New Password have been send to you register email"});

  }catch(error){
    res.status(500).json({message: error.message});
  }
})

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
    // If login is successful, save the user data in session
    req.session.user = existingUser;  // Store user in session
    console.log("Session after login: ", req.session);
    // Redirect to the admin page
    res.redirect('/admin');
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.post('/contact', async (req, res)=>{
  try{
    const {name, email, message} = req.body;
    const newMessage = new Contact ({
      name,
      email,
      message
    });

    // Save the contact to the database
    const contactus= await newMessage.save();
    res.status(201).json({ message: `Will contact you ASAP ${contactus}` });
  }catch(error){
    res.status(500).json({message: error.message});
  }
})

app.get('/admin', async (req, res) => {
  console.log("req.session =====> ", req.session);
  try {
    // Check if the user is logged in (i.e., session contains user data)
    if (!req.session.user) {
      return res.redirect('/login');  // Redirect to login page if not authenticated
    }

    // Fetch all users and contact messages from the database
    const users = await User.find();
    const contactMessages = await Contact.find();

    // Render the admin page with the users and contact messages
    res.render('adminTemplate', { users, contactMessages });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});















// smtp server for template  email