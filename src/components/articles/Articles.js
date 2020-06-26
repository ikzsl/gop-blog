import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { formatDistance } from 'date-fns';
import { getArticlesListFetch } from '../../actions/actions';

// import './articles.scss';
import { ArticlesList, Article } from './style';

export default () => {
  const dispatch = useDispatch();
  const { articles, articlesCount } = useSelector((state) => state.articlesData);

  const handleChange = (page, pageSize) => {
    dispatch(getArticlesListFetch(pageSize, (page - 1) * pageSize));
  };

  const articlesList = (
    <ArticlesList className="articlesList">
      {articles
        ? articles.map(({
          slug, title, tagList, author, createdAt, favoritesCount,
        }) => (
          <Article key={slug} className="article">
            <NavLink
              to={`/articles/${slug}`}
                // }}
              className="navLink"
            >
              <h2>{title}</h2>
              tags:
              {' '}
              {tagList.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
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
            likes:
            {' '}
            {favoritesCount}
          </Article>
        ))
        : null}
    </ArticlesList>
  );

  return (
    <>
      <Pagination total={articlesCount} onChange={handleChange} showSizeChanger={false} />
      {articlesList}
    </>
  );
};
