import styled from 'styled-components';

export const ArticlesList = styled.ul`
  padding: 0;
  margin: 0 auto;
  width: 70%;
`;

export const Article = styled.li`
  margin: 10px;
  padding: 20px;
  text-decoration: none;
  list-style: none;
  background-color: white;
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  padding: 5px;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Container = styled.div`
  text-align: center;
  padding: 5px;
`;
