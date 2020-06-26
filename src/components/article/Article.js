import React, { useEffect } from 'react';
import './article.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentArticleFetch } from '../../actions/actions';

const Article = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getCurrentArticleFetch(slug));
    // eslint-disable-next-line
  }, []);

  const {
    title,
    body,
    createdAt,
    updatedAt,
    tagList,
    description,
    author,
    favorited,
    favoritesCount,
  } = useSelector((state) => state.currentArticle);

  return (
    <div className="form-container">
      {title || null}
      <br />
      {description}
      <br />
      {tagList}
      <br />
      {body}
      <br />
      {createdAt}
      <br />
      {updatedAt}
      <br />
      {author ? author.username : null}
      <br />
      {favorited ? <p>liked</p> : <p>notLiked</p>}
      <br />
      {favoritesCount}
    </div>
  );
};

export default Article;
