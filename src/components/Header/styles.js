import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;

  width: 100%;

  position: sticky;
  top: 0;
  z-index: 999;

  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  width: 121.2rem;
  height: 10.4rem;

  padding: 0 4rem;
  gap: 3.2rem;

  .nav-menu {
    display: flex;

    width: 100%;
    gap: 3.2rem;
  }

  .bar {
    display: block;

    width: 25px;
    height: 3px;
    margin: 5px auto;

    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media only screen and (max-width: 768px) {
    max-width: 768px;

    .nav-menu {
      display: flex;

      width: 100%;
      max-width: 687.2rem;
      height: 100%;
      padding: 3.6rem 2.8rem;

      position: fixed;
      left: -100%;
      top: 10.4rem;
      z-index: 9999;

      gap: 2rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};

  .logo {
    display: flex;

    .ordersMobile span {
      display: flex;
      width: 10px;
      font-size: 14px;
      height: 21px;
      padding: 10px 12px;
      justify-content: center;
      align-items: center;
      margin-top: -0.8rem;
      margin-left: -2.7rem;

      border-radius: 99px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
    > a:nth-child(3) {
      display: none;
    }

    .bar {
      display: none;
    }

    @media (max-width: 768px) {

      gap: 10rem;

      .logo-admin {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.8rem;
      }

      .bar {
        display: block;
      }
      > a:nth-child(3) {
        display: flex;
      }
    }
  }

  h1 {
    font-size: 2.4rem;
  }

  .logo-admin {
    display: flex;
    flex-direction: column;
    > p {
      display: flex;
      justify-content: flex-end;

      font-size: 1.2rem;

      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }

  .logo a {
    display: flex;
    align-items: flex-start;

    gap: 1.1rem;

    text-decoration: none;
    color: inherit;
  }
`;

export const Search = styled.div`
  align-self: center;

  width: 100%;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;
    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-left: 11rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 4.6rem;
    svg {
      margin-left: 0;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 216px;
  height: 4.8rem;

  border: none;
  border-radius: 0.5rem;

  gap: 1.1rem;

  font-size: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 0 3rem;

  @media (min-width: 768px) {
    max-width: 21.6rem;
  }
`;

export const Logout = styled(Link)`
  display: flex;
  align-self: center;

  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;

    transition: 0.5ms;
  }

  > svg:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
