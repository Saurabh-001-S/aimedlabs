import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 2.5rem;
  background: #fff;

  @media screen and (max-width: 460px) {
    padding: 0.5rem 1rem;
  }
`;

export const Heading = styled.div`
  width: 100%;

  & > h1 {
    font-size: 2.2rem;
    font-weight: 999;

    width: fit-content;
    margin: auto;
    color: var(--primary-accent);
  }
`;

export const Form = styled.form`
  gap: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  gap: 0.4rem;
  padding: 0.5rem 0;
  position: relative;

  & > span {
    color: var(--primary-accent);
    font-size: 0.9rem;
    line-height: 1.1;
    font-weight: 600;
  }

  & > input {
    font-size: 0.85rem;
    line-height: 1.05;
    width: 100%;
    height: 30px;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    border: 1px solid var(--third-accent);
  }

  & > svg {
    position: absolute;
    right: 12px;
    bottom: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    & > span {
      font-size: 0.7rem;
    }

    & > input {
      font-size: 0.7rem;
      height: 30px;
    }
  }
`;

export const SmallContainer = styled.div`
  gap: 0.5rem;

  & > label {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--third-accent);
  }

  @media screen and (max-width: 450px) {
    & > label {
      font-size: 0.7rem;
    }
  }
`;
export const Div = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 300px) {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }
`;

export const Linkbutton = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--CTA);
  text-decoration: ${(props) => props.$decoration || "none"};
  cursor: pointer;

  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled.button`
  margin: 1rem 0 0;
  width: 50%;
  height: 30px;
  font-size: 0.75rem;
  line-height: 1.2;
  color: #fff;
  background: var(--secondry-accent);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
