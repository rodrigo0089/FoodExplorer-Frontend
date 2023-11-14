import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 35rem;
  height: 100vh;

  overflow: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 121.2rem;
  margin: auto;
  padding: 3.5rem 4rem;

  font-family: "Poppins", sans-serif;

  .swiper {
    margin-bottom: 6rem;
  }

  p {
    font-size: clamp(1.8rem, 1.727rem + 1.489vw, 3.2rem);
    margin-bottom: 3rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 9rem;
    height: 51.2rem;
    margin: -25.6rem -1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bolder;

    transition: 0.9s;

    > svg {
      height: 3rem;
    }
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.2);
  }

  .swiper-button-next {
    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.COLORS.BACKGROUND_900} 100% 0%,
      transparent 100%
    );
  }
  .swiper-button-prev {
    background: linear-gradient(
      to left,
      transparent 0%,
      ${({ theme }) => theme.COLORS.BACKGROUND_900} 100% 0%,
      transparent 100%
    );
  }
`;

export const Banner = styled.div`
  min-width: 42rem;
  margin: 4.4rem auto 6rem;
  border-radius: 0.2rem;

  display: flex;
  align-items: center;

  position: relative;

  &::after {
    content: "";
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    position: absolute;
    width: 100%;
    height: 85%;
    z-index: -1;
    bottom: 0;
    left: 15px;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  img {
    width: clamp(11.938rem, -0.612rem + 46.915vw, 56.5rem);
    object-fit: cover;
    align-self: end;
    margin: 0 0 -1.1rem -4.8rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 140%;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
  }

  @media (min-width: 1060px) {
    width: 112rem;
    height: 26rem;

    .title {
      margin-left: 2rem;
    }

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    span {
      font-size: 1.6rem;
      line-height: 100%;
    }

    /* img {
      width: 65.6rem;
      position: absolute;
      bottom: 1.3rem;
      z-index: 1;
      left: -5rem;
    } */
  }
`;
