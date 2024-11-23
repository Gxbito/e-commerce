import styled from "styled-components";
import { NavbarLinksContainer } from "../Navbar/NavbarStyles";

export const BurguerMenuContainer = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: ${({ isVisible }) => (isVisible ? "75px" : "-1000px")};
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 2em;
  background-color: var(--white);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 15px 15px 0 rgba(0, 0, 0, 0.04),
    0 34px 21px 0 rgba(0, 0, 0, 0.03), 0 61px 24px 0 rgba(0, 0, 0, 0.01),
    0 95px 27px 0 rgba(0, 0, 0, 0);
  transition: all 0.2s ease;

  @media (max-width: 968px) {
    display: flex;
  }
`;

export const BurguerOptionsContainer = styled(NavbarLinksContainer)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  gap: 2em;

  @media (max-width: 968px) {
    display: flex;
  }

  & > div {
    padding: 0em;
  }

  & > a {
    width: 100%;
  }

  & > button {
    width: 100%;
  }
`;
