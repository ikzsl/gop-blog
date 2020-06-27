import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentArticleFetch } from '../../actions/actions';
import {
  Container, Description, Title, Body, Tag,
} from './style';

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
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tag>{tagList}</Tag>
      <Body>{body}</Body>

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
    </Container>
  );
};

export default Article;
