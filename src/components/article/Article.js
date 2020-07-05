import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HeartOutlined, HeartFilled, EditOutlined } from '@ant-design/icons';
import { setFavoriteArticle, getCurrentArticleFetch } from '../../actions/actions';
import {
  Container,
  Description,
  Title,
  Body,
  Tag,
  FavoriteButton,
  ArticleContainer,
} from './style';

const Article = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    dispatch(getCurrentArticleFetch(slug));
    // eslint-disable-next-line
  }, []);

  const { id, username } = useSelector((state) => state.currentUser);
  const isLogged = !!id;

  const handleLike = async (slugId, favorited) => {
    await dispatch(setFavoriteArticle(slugId, favorited));
    await dispatch(getCurrentArticleFetch(slugId));
  };

  const currentArticle = useSelector((state) => state.currentArticle);

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

  const EditButton = (
    <>
      <br />
      edit
      {' '}
      <EditOutlined />
    </>
  );

  return (
    <Container>
      <ArticleContainer>
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
        {author && username === author.username ? EditButton : null}
      </ArticleContainer>
    </Container>
  );
};

export default Article;
