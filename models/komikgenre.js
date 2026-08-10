module.exports = (sequelize, DataTypes) => {
  const KomikGenre = sequelize.define('KomikGenre', {
    komik_id: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {
    tableName: 'KomikGenre',
    timestamps: false
  });

  return KomikGenre;
};