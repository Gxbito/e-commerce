import styled from "styled-components";
import { SquareButtonStyled } from "../UI/BotonStyles";

export const NavbarContainerStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 6px 13px 0 rgba(0, 0, 0, 0.05),
    0 23px 23px 0 rgba(0, 0, 0, 0.04), 0 52px 31px 0 rgba(0, 0, 0, 0.03),
    0 92px 37px 0 rgba(0, 0, 0, 0.01), 0 144px 40px 0 rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const NavbarStyled = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  @media (max-width: 968px) {
    padding: 0.8em;
  }

  img {
    height: auto;
    width: 5em;

    @media (max-width: 968px) {
      width: 4em;
    }
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8em;
  color: var(--neutral-50);

  @media (max-width: 968px) {
    display: none;
  }

  a {
    font-size: 1.1em;
    font-family: var(--font-primary);
    text-decoration: none;
    color: var(--neutral-800);
    font-weight: 500;

    &:hover {
      color: var(--neutral-600);
    }

    &:active {
      color: var(--black);
    }
  }
`;

export const NavbarOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2em;

  & > a > button {
    position: relative;
  }

  & > :last-child {
    @media (max-width: 968px) {
      display: none;
    }
  }
`;

export const NavbarMenuButton = styled(SquareButtonStyled)`
  display: none;
  position: relative;
  z-index: 11;

  @media (max-width: 968px) {
    display: flex;
  }
`;

export const NavbarMenu = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
`;

export const NumberSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 12;
  top: -8px;
  right: -8px;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: var(--primary-500);
  font-size: 0.6em;
  font-family: var(--font-primary);
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  box-shadow: var(--shadow);
`;
