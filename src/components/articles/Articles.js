import React from 'react';
import { useSelector } from 'react-redux';

import { Pagination } from 'antd';

export default () => {
  const { articles, articlesCount } = useSelector((state) => state.articlesData);

  return (
    <>
      <Pagination total={articlesCount} pageSize={20} />
      <ul>
        {articles ? articles.map((article) => <li key={article.slug}>{article.title}</li>) : null}
      </ul>
    </>
  );
};
