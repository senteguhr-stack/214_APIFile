module.exports = (sequelize, DataTypes) => {
  const Penulis = sequelize.define('Penulis', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName: 'penulis',
    timestamps: false
  });

  Penulis.associate = (models) => {
    Penulis.hasMany(models.Komik, {
      foreignKey: 'penulis_id',
      as: 'komik'
    });
  };

  return Penulis;
};