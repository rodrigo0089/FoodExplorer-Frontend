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
  padding: 3.5rem 4rem;

  .saveButton {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
  
  @media (min-width: 768px) {
    .saveButton {
      align-self: flex-end;
      justify-content: end;
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  h1,
  .titleMobile h2 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.5rem;
    text-align: start;

    margin: 2.4rem 0 0;
  }
   h1 {
    display: none;
  }

  .titleMobile h2 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.5rem;
    text-align: start;

    margin: 2.4rem 0 0;
  }

  button:first-child {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .header {
    justify-content: center;
    text-align: center;
  }

  > div p {
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .dish {
    width: 100%;
  }

  .dishCategory select {
    background: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border-radius: 0.5rem;
    border: none;

    height: 4.8rem;
    width: 100%;
    padding: 12px;

    font-size: 16px;
    line-height: 26px;
  }

  .dishImage {
    display: flex;
    flex-direction: column;

    width: 100%;

    input[type="file"] {
      display: none;
    }

    > label {
      display: flex;
      justify-content: flex-start;

      padding: 1.1rem 3.2rem;
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
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .ingredientsTag {
    justify-content: space-between;
  }

  .dish input,
  .price input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media (min-width: 768px) {
    h1 {
      display: block;
      text-align: left;
    }
    
    .titleMobile h2 {
      display: none;
  }

    .dishImage {
      width: 22.9rem;

      > label {
        padding: 1.1rem 1.2rem;
      }
    }

    .dish {
      width: 46.3rem;
    }

    .dishCategory select {
      width: 36.4rem;
    }

    .details {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
    }

    .ingredients {
      display: flex;
      align-content: center;

      width: 83.7rem;
      height: auto;
      padding: 0.8rem;

      border-radius: 0.8rem;
      border: none;
    }

    .ingredientsTag {
      display: flex;
      justify-content: space-between;
      gap: 3.2rem;
    }

    .price {
      width: 25.1rem;
    }
  }
`;
