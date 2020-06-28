import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { formatDistance } from 'date-fns';
import { getArticlesListFetch, setFavoriteArticle } from '../../actions/actions';

import {
  ArticlesList, Article, TagList, Tag, Container,
} from './style';

import 'antd/dist/antd.css';

export default () => {
  const dispatch = useDispatch();
  const { articles, articlesCount = 1 } = useSelector((state) => state.articlesData);

  const handleChange = (page, pageSize) => {
    dispatch(getArticlesListFetch(pageSize, page * pageSize - pageSize));
  };

  const handleLike = (slug, favorited) => {
    // console.log(slug, favorited);
    dispatch(setFavoriteArticle(slug, favorited));
  };

  const articlesList = (
    <ArticlesList className="articlesList">
      {articles
        ? articles.map(({
          slug, title, tagList, author, createdAt, favoritesCount, favorited,
        }) => (
          <Article key={slug} className="article">
            <NavLink to={`/articles/${slug}`}>
              <h2>{title}</h2>
              <TagList>
                {tagList.map((tag) => (
                  <Tag key={tag} className="tag">
                    {tag}
                  </Tag>
                ))}
              </TagList>
              <br />
              author:
              {' '}
              {author.username}
              <br />
              created:
              {' '}
              {formatDistance(new Date(createdAt), Date.now(), {
                includeSeconds: true,
              })}
              {' '}
              ago
            </NavLink>
            <br />
            <button type="button" onClick={() => handleLike(slug, favorited)}>
              {favorited ? <HeartFilled /> : <HeartOutlined />}
            </button>
            {' '}
            {favoritesCount}
          </Article>
        ))
        : null}
    </ArticlesList>
  );

  return (
    <>
      {articlesList}
      <Container>
        <Pagination
          total={articlesCount}
          onChange={handleChange}
          showSizeChanger={false}
          defaultCurrent={1}
        />
      </Container>
    </>
  );
};
