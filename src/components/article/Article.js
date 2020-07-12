import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { Button, Popconfirm } from 'antd';
import {
  HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined,
} from '@ant-design/icons';
import {
  setFavoriteArticle,
  // getCurrentArticleFetch,
  setCurrentPage,
  articleDeleteFetch,
  getArticlesListFetch,
} from '../../actions/actions';
import {
  Container,
  Description,
  Title,
  Body,
  Tag,
  FavoriteButton,
  ArticleContainer,
  TagsContainer,
  ArticleHeader,
  AuthorImage,
  RightHeaderContainer,
  ControlsContainer,
  ErrorMesage,
} from './style';

const Article = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { slug } = useParams();

  const articles = useSelector((state) => state.articles);
  const currentPage = useSelector((state) => state.currentPage);
  const { message } = useSelector((state) => state.errors);

  const currentArticle = articles.find((article) => article.slug === slug);

  const {
    // slug,
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

  useEffect(() => {
    dispatch(getArticlesListFetch(10, currentPage * 10 - 10));
    // eslint-disable-next-line
  }, []);

  const { id, username } = useSelector((state) => state.currentUser);
  const isLogged = !!id;

  const handleLike = (slugId, isFavorited) => {
    dispatch(setFavoriteArticle(slugId, isFavorited));
  };

  const handleDelete = async () => {
    await dispatch(articleDeleteFetch(slug));
    dispatch(setCurrentPage(1));
    history.push('/');
  };

  const DeleteButton = (
    <Popconfirm
      title="Are you sure delete this article?"
      onConfirm={handleDelete}
      okText="Yes"
      cancelText="No"
    >
      <Button type="danger">
        Delete
        {' '}
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  );

  const EditButton = (
    <Button type="primary">
      <Link to={`/articles/${slug}/edit`}>
        Edit
        {' '}
        <EditOutlined />
      </Link>
    </Button>
  );

  const metaInfo = (
    <>
      <div>
        <b>author: </b>
        {author ? author.username : null}
        <br />
        {author ? <AuthorImage src={author.image} alt="" width="46" height="46" /> : null}
      </div>
      <br />
      createdAt:
      {' '}
      {createdAt && format(new Date(createdAt), 'hh:mm  MMMMMM dd')}
      <br />
      updatedAt:
      {' '}
      {updatedAt && format(new Date(updatedAt), 'hh:mm  MMMMMM dd')}
    </>
  );

  const ArticleItem = (
    <Container>
      <ArticleContainer>
        <ArticleHeader>
          <div>
            <Title>{title}</Title>
            {' '}
            {isLogged ? (
              <FavoriteButton type="button" onClick={() => handleLike(slug, favorited)}>
                {favorited ? <HeartFilled /> : <HeartOutlined />}
              </FavoriteButton>
            ) : (
              <HeartOutlined />
            )}
            {' '}
            {favoritesCount}
            <TagsContainer>{tagList && tagList.length ? <Tag>{tagList}</Tag> : null}</TagsContainer>
            <Description>{description}</Description>
          </div>

          <RightHeaderContainer>
            {metaInfo}
            <ControlsContainer>
              {author && username === author.username ? EditButton : null}
              {author && username === author.username ? DeleteButton : null}
            </ControlsContainer>
          </RightHeaderContainer>
        </ArticleHeader>

        <Body>{body}</Body>
      </ArticleContainer>
    </Container>
  );

  const errorMessage = <ErrorMesage>{message}</ErrorMesage>;

  return (
    <>
      {errorMessage}
      {ArticleItem}
    </>
  );
};

export default Article;
