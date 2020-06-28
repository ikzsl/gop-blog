import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
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

const articlesData = handleActions(
  {
    [actions.loadArticlesList]: (state, { payload }) => payload,
    [actions.favoriteArticle]: (state, { payload }) => {
      const likedArticle = state.articles.filter((article) => article.slug === payload.slug);
      // console.log(payload.slug, payload.favorited);
      likedArticle[0].favorited = !payload.favorited;
      likedArticle[0].favoritesCount = payload.favorited
        ? likedArticle[0].favoritesCount - 1
        : likedArticle[0].favoritesCount + 1;
      return { ...state };
    },
  },
  {},
);

const currentArticle = handleActions(
  {
    [actions.loadCurrentArticle]: (state, { payload }) => payload,
  },
  {},
);

export default combineReducers({
  currentUser,
  errors,
  loading,
  articlesData,
  currentArticle,
});
