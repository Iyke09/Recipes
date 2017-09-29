'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define('Gallery', {
    image: DataTypes.STRING,
    caption: DataTypes.STRING,
    category: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    user: DataTypes.STRING,
    comments: DataTypes.INTEGER
  })

  // Gallery.associate = (models) => {
  //   Gallery.belongsTo(models.User, {
  //     foreignKey: 'userId',
  //     onDelete: 'CASCADE'
  //   });
  // };
  return Gallery;
};
