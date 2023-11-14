import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 32rem;
  height: 100vh;
  min-height: 100%;

  overflow: auto;
  overflow: overlay;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 121.2rem;
  margin: auto;
  margin-bottom: 5.4rem;
  padding: 1rem 4rem;


  .button {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
    gap: 2rem;
    white-space: nowrap;
  }

  .deleteButton {
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .savingButton {
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media (min-width: 768px) {
    padding: 4rem;

    .button {
      align-self: flex-end;
      justify-content: end;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.5rem;
    text-align: flex-start;

    margin: 2.4rem 0 2.4rem;
  }

  button:first-child {
    font-size: 2.4rem;
  }

  .header {
    justify-content: center;
    text-align: center;
  }

  > div p {
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: 3.2rem;
  }

  .dish {
    width: 100%;
  }

  .dishIngredients {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
  }

  .dishDetails {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5rem;
  }

  .dishCategory select {
    border-radius: 0.5rem;
    border: none;

    height: 4.8rem;
    width: 100%;

    padding: 12px;
    font-size: 16px;
    line-height: 26px;

    background: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .dishImage {
    display: flex;
    flex-direction: column;


    input[type="file"] {
      display: none;
    }

    > label {
      display: flex;
      justify-content: flex-start;

      padding: 1.2rem 3.2rem;
      gap: 0.5rem;
      border-radius: 0.5rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};

      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;

      cursor: pointer;
    }

  }

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    height: auto;
    gap: 2.4rem;
    padding: 0.8rem;

    border-radius: 0.8rem;
    margin-bottom: 3.2rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .ingredientsTag {
    justify-content: space-between;
  }

  .textarea {
    margin-top: 3.2rem;
  }

  @media (min-width: 768px) {
    h1 {
      text-align: left;
    }

    .dishImage {
      width: 22.9rem;

      > label {
        padding: 1.1rem 1.2rem;
      }
    }

    .dish {
      width: 46.4rem;
    }

    .dishCategory select {
      width: 36.4rem;
    }

    .details {
      flex-direction: column;
    }

    .dishDetails {
      flex-direction: row;
      gap: 3.2rem;
    }

    .ingredients {
      display: flex;
      align-content: center;

      width: 83.7rem;
      height: auto;
      padding: 0.8rem;
      margin-bottom: 3.2rem;

      border-radius: 0.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_800};
    }

    .ingredientsTag {
      display: flex;
      gap: 3.2rem;
    }

    .price {
      width: 25.1rem;
    }

    .dish input,
    .price input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }
`;
