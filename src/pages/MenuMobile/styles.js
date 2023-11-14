import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 35rem;
  height: 100vh;

  .header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 114px;

    padding: 6rem 0 2.9rem 2.8rem;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_200};

    > a {
      color: inherit;
    }
    > h2 {
      font-family: "Roboto", sans-serif;
      font-size: 2.2rem;
      font-weight: 400;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 76.8rem;
  height: 100%;

  margin: auto;
  padding: 3.5rem 4rem;

  .content {
    .button {
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 140%;
      width: 100%;

      margin-bottom: 1rem;
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      border-bottom-width: 100%;

      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
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
    margin-bottom: 4.6rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
