import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const ArticleContainer = styled.div`
  padding: 20px;
  min-height: 90vh;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 40px;
  color: #1890ff;
`;

export const Description = styled.div`
  opacity: 0.7;
`;

export const Body = styled.div`
  font-size: 24px;
  color: black;
`;

export const Tag = styled.span`
  padding: 5px;
  border: 1px solid green;
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  :focus {
    outline: none;
    /* outline-color: blue; */
  }
`;
