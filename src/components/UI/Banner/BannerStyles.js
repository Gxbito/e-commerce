import styled from "styled-components";

export const BannerContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 5px 48px 5px 48px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(315deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  }

  @media (max-width: 968px) {
    display:none;
  }
`;

export const BannerTextContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: .4em;
  z-index: 2;

  h3 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1.4em;
    text-transform: uppercase;
    color: #ffffff;
  }

  h2 {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: 3.2em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
