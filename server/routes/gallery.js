import express from 'express';
import recipeController from '../controllers/recipe';

const router = express.Router();

router.post('/', recipeController.addPhoto);

router.get('/:cart', recipeController.photoCart);

module.exports = router;
