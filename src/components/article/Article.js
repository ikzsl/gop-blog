import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Button, Popconfirm } from 'antd';
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
  TagsContainer,
  ArticleHeader,
  AuthorImage,
  RightHeaderContainer,
  ControlsContainer,
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
    <Popconfirm
      title="Are you sure delete this task?"
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

  return (
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
            <br />
            {author ? author.username : null}
            {author ? <AuthorImage src={author.image} alt="" width="46" height="46" /> : null}
            <br />
            {createdAt}
            <br />
            {updatedAt}
            <br />
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
};

export default Article;
