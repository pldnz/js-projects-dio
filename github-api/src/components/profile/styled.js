import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  aligin-items: flex-start;
  div{
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserName = styled.div`
  display: flex;
  aligin-items: flex-start;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a{
    color: blue;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const WrappeImage = styled.img`
  border-radius: 100%;
  width: 200px;
  margin: 8px;
`;
