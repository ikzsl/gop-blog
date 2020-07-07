import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import {
  HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined,
} from '@ant-design/icons';
import {
  setFavoriteArticle,
  getCurrentArticleFetch,
  setCurrentPage,
  articleDeleteFetch,
} from '../../actions/actions';
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
  const history = useHistory();
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

  const handleDelete = async () => {
    await dispatch(articleDeleteFetch(slug));
    await dispatch(setCurrentPage(1));
    history.push('/');
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

  const DeleteButton = (
    <button type="button" onClick={handleDelete}>
      Delete
      {' '}
      <DeleteOutlined />
      <br />
    </button>
  );

  const EditButton = (
    <button type="button">
      <Link to={`/articles/${slug}/edit`}>
        Edit
        {' '}
        <EditOutlined />
      </Link>
      <br />
    </button>
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
        {author && username === author.username ? DeleteButton : null}
      </ArticleContainer>
    </Container>
  );
};

export default Article;
