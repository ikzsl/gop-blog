import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { setFavoriteArticle } from '../../actions/actions';
import {
  Container, Description, Title, Body, Tag, FavoriteButton,
} from './style';

const Article = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const { id } = useSelector((state) => state.currentUser);
  const isLogged = !!id;

  const handleLike = (slugId, favorited) => {
    // console.log(slug, favorited);
    dispatch(setFavoriteArticle(slugId, favorited));
  };

  const articles = useSelector((state) => state.articlesData.articles);
  const currentArticle = articles.find((article) => article.slug === slug);

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
  } = currentArticle;

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
      {isLogged ? (
        <FavoriteButton type="button" onClick={() => handleLike(slug, favorited)}>
          {favorited ? <HeartFilled /> : <HeartOutlined />}
        </FavoriteButton>
      ) : (
        <HeartOutlined />
      )}
      {favoritesCount}
    </Container>
  );
};

export default Article;
