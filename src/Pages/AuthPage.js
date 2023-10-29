import React, { useState } from "react";
import { Login, Sign } from "../Components/index";
import { styled } from "styled-components";
import { ReactComponent as Heroicon } from "../Assets/Icons/Group 3608.svg";

const AuthPage = () => {
  const [authPage, setAuthPage] = useState(true);
  return (
    <Main className="flex__row center">
      <Container $containerWidth="40%" className="imgCon">
        <ImgContainer className="flex__row center">
          <StyledHeroicon />
        </ImgContainer>
      </Container>
      <Container
        className="flex__col center detailCon"
        $containerWidth="60%"
        $shadow="0 10px 20px 0 rgba(0,0,0,0.16)"
      >
        <AuthContainer>{authPage ? <Login /> : <Sign />}</AuthContainer>
        <SmallContainer className="flex__row center">
          <span>
            {authPage ? "Don't have an account?" : "Already have an account?"}
          </span>
          <Linkbutton
            onClick={() => {
              setAuthPage(!authPage ? true : false);
            }}
          >
            {authPage ? "Register Here" : "Log In"}
          </Linkbutton>
        </SmallContainer>
      </Container>
    </Main>
  );
};

export default AuthPage;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem 2.5rem;
  overflow-y: hidden;
  font-family: var(--body-font);

  @media screen and (max-width: 400px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 900px) {
    & > .imgCon {
      display: none;
      width: 0;
    }
    & > .detailCon {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  width: ${(props) => props.$containerWidth || "50%"};
  gap: ${(props) => props.$gap || "0"};
  height: 100%;
  background: #fff;
  box-shadow: ${(props) => props.$shadow || "none"};
  border-radius: 20px;
`;
const ImgContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const StyledHeroicon = styled(Heroicon)`
  width: 100%;
  height: 70%;
`;

const AuthContainer = styled.div`
  width: 75%;

  @media screen and (max-width: 580px) {
    width: 95%;
  }
`;

const SmallContainer = styled.div`
  gap: 0.5rem;

  & > span:first-child {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--primary-accent);
  }

  @media screen and (max-width: 580px) {
    width: 95%;
  }
  @media screen and (max-width: 320px) {
    flex-direction: column;
    gap: 0rem;
  }

  @media screen and (max-width: 580px) {
    & > span:first-child {
      font-size: 0.7rem;
    }
  }
`;

const Linkbutton = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--CTA);
  text-decoration: underline;
  cursor: pointer;

  @media screen and (max-width: 580px) {
    font-size: 0.7rem;
  }
`;
