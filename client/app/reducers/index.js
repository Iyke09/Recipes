import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import recipe from './recipe';
import user from './user';
import error from './error';
import edit from './edit';
import fav from './fav';
import single from './single';
import comment from './comment';
import gallery from './gallery';
import profile from './profile';


const rootReducer = combineReducers({ posts, comments, recipe, user, error,
    edit, fav, comment, gallery, profile, single, routing: routerReducer });

export default rootReducer;
