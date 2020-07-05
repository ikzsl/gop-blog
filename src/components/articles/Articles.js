import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { formatDistance } from 'date-fns';
import { getArticlesListFetch, setFavoriteArticle, setCurrentPage } from '../../actions/actions';

import {
  ArticlesList,
  Article,
  TagList,
  Tag,
  Container,
  FavoriteButton,
  Title,
  ArticleAuthor,
  ArticleAuthorInfo,
  ArticleContainer,
  AuthorImage,
  Username,
} from './style';

import 'antd/dist/antd.css';

export default () => {
  const dispatch = useDispatch();
  const { articles = [], articlesCount = 1 } = useSelector((state) => state.articlesData);
  const { id, username } = useSelector((state) => state.currentUser);
  const currentPage = useSelector((state) => state.currentPage);
  const isLogged = !!id;

  const handleChange = (page, pageSize) => {
    dispatch(getArticlesListFetch(pageSize, page * pageSize - pageSize));
    dispatch(setCurrentPage(page));
  };

  const handleLike = (slug, favorited) => {
    // console.log(slug, favorited);
    dispatch(setFavoriteArticle(slug, favorited));
  };

  useEffect(() => {
    dispatch(getArticlesListFetch(10, currentPage * 10 - 10));
    // eslint-disable-next-line
  }, []);

  const articlesList = (
    <ArticlesList>
      {articles
        ? articles.map(({
          slug, title, tagList, author, createdAt, favoritesCount, favorited,
        }) => (
          <Article key={slug} currentUser={username === author.username}>
            <ArticleContainer>
              <NavLink to={`/articles/${slug}`}>
                <Title>{title}</Title>
              </NavLink>
              {isLogged ? (
                <FavoriteButton type="button" onClick={() => handleLike(slug, favorited)}>
                  {favorited ? <HeartFilled /> : <HeartOutlined />}
                </FavoriteButton>
              ) : (
                <HeartOutlined />
              )}
              {' '}
              {favoritesCount}
              <TagList>
                {tagList.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
            </ArticleContainer>
            <ArticleAuthor>
              <ArticleAuthorInfo>
                <Username>{author.username}</Username>
                {formatDistance(new Date(createdAt), Date.now(), {
                  includeSeconds: true,
                })}
              </ArticleAuthorInfo>

              <AuthorImage src={author.image} alt="" width="46" height="46" />
            </ArticleAuthor>
          </Article>
        ))
        : null}
    </ArticlesList>
  );

  return (
    <Container>
      {articlesList}
      <Pagination
        total={articlesCount}
        onChange={handleChange}
        showSizeChanger={false}
        defaultCurrent={1}
        current={currentPage}
      />
    </Container>
  );
};
