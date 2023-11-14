import styled from "styled-components";

export const Container = styled.div`
  p {
    display: flex;
    padding: .4rem .8rem;
    justify-content: center;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;
    text-align: center;

    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  }
`;
