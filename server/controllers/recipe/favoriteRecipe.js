import { Gallery, Favorite } from '../../models';
import jwt from 'jsonwebtoken';

const userFavorite = (req, res) => { // -------------------------add recipe to fav and update recipe!
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).send({
      message: 'you have to be logged in to create recipe',
    });
  }
  Gallery.findOne({ where: { id: req.params.id } })
    .then((recipe) => {
      if (!recipe) {
        res.status(404).send({
          message: ' not found!',
        });
      } else {
        Favorite.findOne({
          where: {
            recipeId: req.params.id,
            userId: decoded.user.id,
          },
        })
          .then((success) => {
            if (!success) {
              Favorite.create({
                recipeId: req.params.id,
                userId: decoded.user.id,
              })
                .then(() => {
                  Favorite.findAndCountAll({
                    where: {
                      recipeId: req.params.id,
                    },
                  })
                    .then((count) => {
                      Gallery.findById(req.params.id)
                        .then((recipe) => {
                          recipe.update({
                            likes: count.count,
                          })
                            .then(() => res.status(201).send({
                              photo: recipe,
                              message: 'recipe favorited',
                            }))
                            .catch(error => res.status(401).send(error));
                        })
                        .catch(error => res.status(401).send(error));
                    })
                    .catch(error => res.status(401).send(error));
                })
                .catch(error => res.status(500).send(error.toString()));
            } else {
              success.destroy()
                .then(() => {
                  Favorite.findAndCountAll({
                    where: {
                      recipeId: req.params.id,
                    },
                  })
                    .then((count) => {
                      Gallery.findById(req.params.id)
                        .then((recipe) => {
                          recipe.update({
                            likes: count.count,
                          })
                            .then(() => res.status(201).send({
                              photo: recipe,
                              message: 'recipe unfavorited',
                            }))
                            .catch(error => res.status(401).send(error));
                        })
                        .catch(error => res.status(401).send(error));
                    })
                    .catch(error => res.status(401).send(error));
                })
                .catch(error => res.status(500).send(error.toString()));
            }
          })
          .catch(error => res.status(500).send(error.toString()));
      }
    })
    .catch(error => res.status(500).send(error));
};

export default userFavorite;
