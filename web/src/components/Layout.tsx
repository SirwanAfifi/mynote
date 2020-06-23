import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import CloseIcon from "./CloseIcon";

type Props = {
  children?: ReactNode;
};
const Layout = (props: Props) => {
  return (
    <Container>
      <Sidebar>
        <CloseIcon />
      </Sidebar>
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
  position: relative;
  svg {
    position: absolute;
    right: 30px;
    top: 20px;
    path {
      fill: #faf4fb;
    }
    cursor: pointer;
  }
`;
const Main = styled.div`
  background-color: #faf4fb;
  flex-grow: 1;
  padding: 10px;
`;
