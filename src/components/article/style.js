import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 40px;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3), -4px -4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const ArticleContainer = styled.div`
  padding: 20px;
  /* min-height: 90vh; */
  background-color: white;
`;

export const Title = styled.span`
  font-size: 20px;
  color: #1890ff;
`;

export const Description = styled.div`
  opacity: 0.7;
`;

export const Body = styled.div`
  font-size: 16px;
  color: black;
`;

export const Tag = styled.span`
  padding: 0 5px;
  border: 1px solid gray;
  border-radius: 4px;
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

export const TagsContainer = styled.div`
  margin: 10px 0;
`;

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  min-width: 200px;
  flex-direction: column;
`;

export const AuthorImage = styled.img`
  border-radius: 50%;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
