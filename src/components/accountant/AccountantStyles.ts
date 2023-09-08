import styled from "styled-components";

export const AccRowData = styled.div`
  margin: 1rem 0;
`;

export const StyledLink = styled.a<{ hasUnderline?: boolean }>`
  font-size: 1.2rem;
  color: #000000;
  text-decoration: ${({ hasUnderline }) =>
    hasUnderline ? "underline" : "none"};
`;

export const StyledTitle = styled.p`
  color: #54585c;
  font-size: 1rem;
`;


