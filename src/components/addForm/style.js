import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

export const ButtonContainer = styled.div`
  margin: 10px;
`;

export const SubmitButtonContainer = styled.div`
  margin: 10px auto;
  text-align: center;
  width: 50%;
`;

export const RequiredStar = styled.span`
  color: red;
`;
