import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

const MONGO_URI = 'mongodb+srv://vv7107748:0454WJzsstWHccF0@crudapi.rxcrg.mongodb.net/?retryWrites=true&w=majority&appName=crudAPI';

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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});






