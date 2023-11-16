import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: relative;

  width: 30rem;
  height: 51.2rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  background: ${({ theme }) => theme.COLORS.DARK_200};

  .linkButton {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0;
    margin-top: -33px;
    background-color: transparent;

    > svg {
      width: 24px;
      height: 24px;
    }
  }

  .container {
    display: grid;
    padding: 3.8rem 2.6rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    > img {
      width: clamp(8.8rem, 2.996rem + 9.362vw, 17.6rem);
      height: clamp(8.8rem, 2.996rem + 9.362vw, 17.6rem);
      border-radius: 999px;
      object-fit: cover;
      margin: 3rem auto 1.6rem;
    }
  }

  .product-title {
    font-weight: 700;
    font-size: clamp(1.4rem, 0.59rem + 1.064vw, 2.4rem);
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    margin-bottom: 1.8rem;
    white-space: nowrap;
  }

  .description {
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 1.6rem;
    height: 3.4rem;
  }

  .price {
    font-family: "Roboto", sans-serif;
    font-size: clamp(1.6rem, 0.545rem + 1.702vw, 3rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLUE_100};

    margin-bottom: 1.6rem;
  }

  @media (mmax-width: 1100px) {
      width: 28rem;
    height: 50rem;
  }
  @media (max-width: 1000px) {
      width: 26rem;
    height: 49rem;
  }
  @media (max-width: 827px) {
      width: 24rem;
    height: 46rem;
  }
  @media (max-width: 696px) {
      width: 22rem;
    height: 45rem;
  }
`;

export const PurchaseCard = styled.div`
  display: flex;

  button {
    height: 5.6rem;
    max-width: 24.6rem;
    white-space: nowrap;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin: 0 2.4rem 0 0;
  }

  .counter span {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  .includeButton {
    height: 56;
    width: 92;
    padding: 12px 4px;
  }

  /* p {
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE};
    text-align: center;
    border: 1px solid red;
  } */
`;
