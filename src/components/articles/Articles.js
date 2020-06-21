import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { getArticlesListFetch } from '../../actions/actions';

export default () => {
  const dispatch = useDispatch();
  const { articles, articlesCount } = useSelector((state) => state.articlesData);

  const handleChange = (page, pageSize) => {
    // console.log(page, pageSize);
    dispatch(getArticlesListFetch(pageSize, (page - 1) * pageSize));
  };

  const handleShowSizeChange = (current, size) => {
    // console.log(current, size);
    dispatch(getArticlesListFetch(size, current * size));
  };

  return (
    <>
      <Pagination
        total={articlesCount}
        onChange={handleChange}
        onShowSizeChange={handleShowSizeChange}
      />
      <ul>
        {articles
          ? articles.map((article) => (
            <li key={article.slug}>
              title -
              {' '}
              {article.title}
              <br />
              body -
              {' '}
              {article.body}
            </li>
          ))
          : null}
      </ul>
    </>
  );
};
