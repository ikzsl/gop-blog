import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { formatDistance } from 'date-fns';
import { getArticlesListFetch, getCurrentArticleFetch } from '../../actions/actions';

import './articles.scss';

export default () => {
  const dispatch = useDispatch();
  const { articles, articlesCount } = useSelector((state) => state.articlesData);

  const handleChange = (page, pageSize) => {
    dispatch(getArticlesListFetch(pageSize, (page - 1) * pageSize));
  };

  const handleArticle = (slugId) => {
    dispatch(getCurrentArticleFetch(slugId));
  };

  const articlesList = (
    <ul className="articlesList">
      {articles
        ? articles.map(({
          slug, title, tagList, author, createdAt, favoritesCount,
        }) => (
          <li key={slug} className="article">
            <NavLink
              to={`/articles/${slug}`}
              onClick={() => handleArticle(slug)}
              onKeyPress={() => {
                // console.log('click ondddqq article');
              }}
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
          </li>
        ))
        : null}
    </ul>
  );

  return (
    <>
      <Pagination total={articlesCount} onChange={handleChange} showSizeChanger={false} />
      {articlesList}
    </>
  );
};
