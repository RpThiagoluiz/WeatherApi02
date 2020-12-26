import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  padding: 0.75em;
  margin: 1.25em;
`;

export const ContentHeader = styled.div`
  color: #2a363b;
  text-align: center;
  > h1 {
    flex: 1;
  }
  > a {
    text-decoration: none;
    font-weight: bold;
    color: #9900ff;
  }
  > small {
    padding: 0.25em;
  }
  > input {
    background-color: #d7e0e4;
    position: relative;
    top: 30px;
    right: 50px;

    padding: 0.75em;

    border-radius: 12px;
  }
  > button {
    background-color: transparent;
    position: relative;
    top: 60px;
    right: 20px;
    > img {
      width: 48px;
      height: 48px;
    }
  }
`;
export const Content = styled.div`
  padding: 0.75em;
  margin-top: 1.25em;
  background-color: #2a363b;
  border-radius: 12px;
  box-shadow: 5px 5px 5px 2px #99b898;
  color: #fecea8;

  width: 500px;
  height: 400px;
`;

export const Header = styled.header`
  text-align: left;
  padding: 0.75em;
`;
export const Main = styled.main`
  padding: 0.75em;
  margin: 0.25em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: bold;
  }
`;
export const Footer = styled.footer`
  display: flex;

  padding: 15px;
  flex-wrap: wrap;
  > small {
    margin: 15px;
  }
`;

export const Error404 = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > img {
    width: 56px;
    height: 56px;
  }
`;
