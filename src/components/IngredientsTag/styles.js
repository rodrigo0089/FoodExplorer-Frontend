import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  

  padding: 0 1.6rem;
  border-radius: 0.8rem;
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  svg {
    vertical-align: middle;
  }

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > input {
    max-width: 8rem;
    height: 2.8rem;

    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
