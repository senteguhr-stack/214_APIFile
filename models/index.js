const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

// Import fungsi inisialisasi model
const Komik = require('./komik')(sequelize, DataTypes);
const Penulis = require('./penulis')(sequelize, DataTypes);
const Genre = require('./genre')(sequelize, DataTypes);

// ==========================================
// DEFINISI RELASI / ASSOCIATIONS
// ==========================================

// Relasi Penulis & Komik (1 Penulis punya banyak Komik)
Penulis.hasMany(Komik, { foreignKey: 'penulisId', as: 'komik' });
Komik.belongsTo(Penulis, { foreignKey: 'penulisId', as: 'penulis' });

// Relasi Genre & Komik (1 Genre punya banyak Komik)
Genre.hasMany(Komik, { foreignKey: 'genreId', as: 'komik' });
Komik.belongsTo(Genre, { foreignKey: 'genreId', as: 'genre' });

module.exports = {
  sequelize,
  Komik,
  Penulis,
  Genre
};