import { Gallery } from '../../models';
import jwt from 'jsonwebtoken';

const deleteGallery = (req, res) => { // -------------------- delete Gallery
  const decoded = jwt.decode(req.body.token || req.query.token || req.headers.token);
  Gallery.findOne({ where: { id: req.params.id } })
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).send({
          message: ' Not Found',
        });
      }
      if (recipe.user !== decoded.user.username) {
        return res.status(401).json({
          message: 'Not Authorized',
        });
      }
      return recipe
        .destroy()
        .then(() => res.status(200).send({ message: 'Photo deleted' })) // Send back the updated todo.
        .catch(error => res.status(400).send(error.toString()));
    })
    .catch(error => res.status(400).send(error.toString()));
};

export default deleteGallery;
