import mongoose from "mongoose";

// Define a schema for the User
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

// Create a User model from the schema
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
