import { Gallery, Comment, User } from '../../models';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const reviewRecipe = (req, res) => { // ---------------------add review and alert owner of recipe
  const decoded = jwt.decode(req.headers.token || req.body.token);
  if (!decoded) {
    return res.status(401).send({
      message: 'you have to be logged in',
    });
  }
  if (!req.body.content) {
    return res.status(401).send({
      message: 'please fill in the required fields',
    });
  }
  Gallery.findById(req.params.id)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).send({
          message: ' not found',
        });
      }
        Comment.create({
          recipeId: 11,
          content: req.body.content,
          email: decoded.user.username,
          occupation: req.params.id,
        })
          .then((review) => {
            Comment.findAndCountAll({
              where: {
                occupation: req.params.id,
              },
            })
              .then((count) => {
                Gallery.findById(req.params.id)
                  .then((recipe) => {
                    recipe.update({
                      comments: count.count,
                    })
                      .then(() => res.status(201).send({
                        photo: recipe,
                        message: 'review sent',
                      }))
                      .catch(error => res.status(401).send(error));
                  })
                  .catch(error => res.status(401).send(error));
              })
              .catch(error => res.status(401).send(error));
          })
          .catch(error => res.status(400).send(error.toString()));

    })
    .catch(error => res.status(500).send(error.toString()));
};

export default reviewRecipe;
