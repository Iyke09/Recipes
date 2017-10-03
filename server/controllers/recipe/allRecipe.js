import { Gallery } from '../../models';
import jwt from 'jsonwebtoken';

const allGallery = (req, res) => {
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).json({
      message: 'you have to be logged in to create Gallery',
    });
  }
  Gallery.findAll()
    .then(recipe => res.status(200).send(recipe))
    .catch(error => res.status(400).send(error.toString()));
};

export default allGallery;
