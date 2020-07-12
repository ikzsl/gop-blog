import styled from 'styled-components';

export const ArticlesList = styled.ul`
  padding: 0;
  margin: 0 auto;
  /* max-width: 900px; */
`;

export const Article = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 20px 20px;
  padding: 20px;
  text-decoration: none;
  list-style: none;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 4px 12px
    ${(props) => (props.currentUser ? 'rgba(0, 255, 0, 0.15)' : 'rgba(0, 0, 0, 0.15)')};
  border-radius: 5px;
  min-height: 140px;
`;

export const Title = styled.h2`
  margin-right: 10px;
  display: inline-block;
  color: #1890ff;
  text-align: left;
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  padding: 0 10px;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Container = styled.div`
  text-align: center;
  padding: 5px;
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

export const ArticleAuthor = styled.div`
  display: flex;
`;

export const ArticleAuthorInfo = styled.div`
  margin-right: 10px;
  text-align: right;
`;

export const ArticleContainer = styled.div`
  margin-right: 10px;
  text-align: right;
`;

export const AuthorImage = styled.img`
  border-radius: 50%;
`;

export const Username = styled.div`
  font-size: 22px;
  color: black;
`;

export const ErrorMesage = styled.div`
  font-size: 22px;
  color: red;
`;
