import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
// import __ from 'lodash';
import * as actions from '../actions/actions';

const currentUser = handleActions(
  {
    [actions.logoutUser]: () => {},
    [actions.loginUser]: (state, { payload }) => payload,
  },
  {},
);

const errors = handleActions(
  {
    [actions.changeFetchStatus]: (state, { payload }) => payload,
  },
  {},
);

const loading = handleActions(
  {
    [actions.changeLoadingStatus]: (state, { payload }) => payload,
  },
  false,
);

const articles = handleActions(
  {
    [actions.loadArticlesList]: (state, { payload }) => payload.articles,
    [actions.favoriteArticle]: (state, { payload }) => {
      const likedArticle = state.find((article) => article.slug === payload.slug);
      const newLikedArticle = { ...likedArticle };
      const idx = state.findIndex((article) => article.slug === payload.slug);
      newLikedArticle.favorited = !likedArticle.favorited;
      newLikedArticle.favoritesCount = likedArticle.favorited
        ? newLikedArticle.favoritesCount - 1
        : newLikedArticle.favoritesCount + 1;
      // const newState = __.differenceWith(state, [likedArticle], __.isEqual);
      return [...state.slice(0, idx), newLikedArticle, ...state.slice(idx + 1)];
    },
  },
  [],
);

const articlesCount = handleActions(
  {
    [actions.loadArticlesList]: (state, { payload }) => payload.articlesCount,
  },
  1,
);

// const currentArticle = handleActions(
//   {
//     [actions.loadCurrentArticle]: (state, { payload }) => payload,
//   },
//   1,
// );

const currentPage = handleActions(
  {
    [actions.setCurrentPage]: (state, { payload }) => payload,
  },
  1,
);

export default combineReducers({
  currentUser,
  errors,
  loading,
  articles,
  articlesCount,
  currentPage,
  // currentArticle,
});
