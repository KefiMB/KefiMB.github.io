import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("KM");
});

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true }
});

app.post('/post', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

  
    const client = new Post({ name, description });
    await client.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
const Client = mongoose.model('Post', postSchema);

db.users.createIndex({ email: 1, city: 1 }, { unique: true });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
