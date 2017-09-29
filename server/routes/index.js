import express from 'express';

import user from './userRouter';
import recipe from './recipeRouter';
import gallery from './gallery';

const route = express.Router();

route.use('/users',user);
route.use('/recipes',recipe);
route.use('/gallery', gallery);

module.exports = route;

