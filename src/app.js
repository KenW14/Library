const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const borrowingRoutes = require('./routes/borrowingRoutes');

const app = express();
app.use(express.json());

// Gunakan routes
app.use('/api/books', bookRoutes); // Pastikan ini adalah route handler yang valid
app.use('/api/members', memberRoutes);
app.use('/api/borrowings', borrowingRoutes);

// Menangani error
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});