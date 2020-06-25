import React from 'react';
import './article.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { article } = useSelector((state) => state.currentArticle);
  const { slug } = useParams();

  return (
    <div className="form-container">
      {article ? article.title : null}
      <br />
      {slug}
    </div>
  );
};

export default Article;
