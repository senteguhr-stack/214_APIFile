module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('Komik', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    judul: DataTypes.STRING,
    sinopsis: DataTypes.TEXT,
    tahun_terbit: DataTypes.STRING,
    penulis_id: DataTypes.INTEGER,
    gambar: DataTypes.STRING
  }, {
    tableName: 'komik',
    timestamps: false
  });

  Komik.associate = (models) => {
    Komik.belongsTo(models.Penulis, {
      foreignKey: 'penulis_id',
      as: 'penulis'
    });

    Komik.belongsToMany(models.Genre, {
      through: models.KomikGenre,
      foreignKey: 'komik_id',
      otherKey: 'genre_id',
      as: 'genre'
    });
  };

  return Komik;
};