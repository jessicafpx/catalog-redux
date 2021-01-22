import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;

  border: 1px solid yellow;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: -36px ;
  border: 1px solid green;

  svg{
    border: 1px solid red;
    margin-right: 3.6rem;
  }

  h3 {
    color: #FD7C5C;
    font-size: 3.6rem;
    font-weight: 700;
  }
`;

export const Content = styled.main`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3.6rem;
`;