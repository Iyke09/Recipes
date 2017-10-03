import jwt from 'jsonwebtoken';
import { Gallery } from '../../models';

const addPhoto = (req, res) => { // -----------------------------create recipe!
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).json({
      message: 'you have to be logged in to create photo',
    });
  }
  return Gallery.create({
    image: req.body.image,
    caption: req.body.caption,
    category: req.body.category,
    likes: req.body.likes,
    comments: req.body.comment,
    user: decoded.user.username,
  })
    .then(photos => res.status(201).send({
      photo: photos,
      message: 'gallery created'
    }))
    .catch(error => res.status(500).send(error));
};

export default addPhoto;
