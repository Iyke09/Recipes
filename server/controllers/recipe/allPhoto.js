import jwt from 'jsonwebtoken';
import { Gallery } from '../../models';

const photoCart = (req, res) => { // -----------------------------create recipe!
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).json({
      message: 'you have to be logged in to create photos',
    });
  }
  Gallery.findAll({ where: { category: req.params.cart } })
  .then((photo) => {
    if (photo.length === 0) {
      return res.status(404).send({
        message: 'sorry no pictures available for this category',
      });
    }
    res.status(200).send({
      photo: photo,
      message: 'photos found'
    })
  })
    .catch(error => res.status(500).send(error.toString()));
};

export default photoCart;




