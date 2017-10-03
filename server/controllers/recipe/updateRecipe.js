import { Gallery } from '../../models';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const updateGallery = (req, res) => { // ---------- send email if user's fav Gallery gets updated
  const decoded = jwt.decode(req.body.token || req.query.token || req.headers.token);
  Gallery.findOne({ where: { id: req.params.id } })
  .then((recipe) => {
    if (!recipe) {
      return res.status(404).send({
        message: 'Photo Not Found',
      });
    }
    if (recipe.user !== decoded.user.username) {
      return res.status(401).json({
        message: 'Unauthorization error',
      });
    }
    return recipe
      .update({
        image: req.body.image || recipe.image,
        caption: req.body.caption || recipe.caption,
        category: req.body.category || recipe.category,
        likes: req.body.likes || recipe.likes,
        comments: req.body.comment || recipe.comments,
        user: decoded.user.username
      })
      .then((success) => res.status(201).send({
          message: 'recipe updated'
      }))
      .catch(error => res.status(500).send(error));
  })
    .catch(error => res.status(400).send(error));
};

export default updateGallery;
