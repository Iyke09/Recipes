import jwt from 'jsonwebtoken';
import { Gallery } from '../../models';

const userPhotos = (req, res) => { // -----------------------------create recipe!
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).json({
      message: 'you have to be logged in to get user profile recipe',
    });
  }
  Gallery.findAll({ where: { user: decoded.user.username } })
  .then( (recipe) => {
    if (recipe.length === 0) {
      return res.status(404).send({
        message: ' Not Found profile',
      });
    }
    res.status(200).send({
      recipe: recipe,
      message: 'photos found'
    })
  })
    .catch(error => res.status(500).send(error));
};

export default userPhotos;




