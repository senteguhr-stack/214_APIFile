const express = require('express');
require('dotenv').config();

// Import database instance dari config/db.js
const sequelize = require('./config/db');

// Import model untuk memastikan relasi terdaftar sebelum sync
require('./models');

// Import router
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// MIDDLEWARE (Wajib ditaruh SEBELUM routes)
// ==========================================
// Membaca request body berformat JSON (Mengatasi req.body undefined)
app.use(express.json());
// Membaca request body berformat URL-encoded
app.use(express.urlencoded({ extended: true }));

// ==========================================
// ROUTES
// ==========================================
app.use('/api', apiRouter);

// Root Endpoint Test
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server REST API Perpustakaan/Komik Berjalan Lancar!'
  });
});

// ==========================================
// KONEKSI DATABASE & JALANKAN SERVER
// ==========================================
async function startServer() {
  try {
    // Autentikasi koneksi ke PostgreSQL
    await sequelize.authenticate();
    console.log('Database connected...');

    // Sinkronisasi model tabel ke database
    await sequelize.sync({ alter: false });
    console.log('Database synchronized.');

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();