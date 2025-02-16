const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes.js');
// const borrowingRoutes = require('./routes/borrowingRoutes');

const app = express();
app.use(express.json());

// Gunakan routes
app.use('/api/books', bookRoutes);
app.use("/api/members", memberRoutes);
// app.use("/api/borrowings", borrowingRoutes);


// // Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});