import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const Layout = (props: Props) => {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Main>{props.children}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Sidebar = styled.div`
  flex: 0.4;
  padding: 10px;
  background-image: linear-gradient(
    to right top,
    #b47ee1,
    #ac6fd4,
    #a461c8,
    #9c52bb,
    #9442ae
  );
`;
const Main = styled.div`
  background-color: #faf4fb;
  flex-grow: 1;
  padding: 10px;
`;
