import styled from "styled-components";

export const AccRowData = styled.div`
  margin-bottom: 2.4rem;
`;

export const StyledLink = styled.a<{ $hasUnderline?: boolean }>`
  font-size: 1.6rem;
  color: ${props => props.theme.black};
  text-decoration: ${({ $hasUnderline }) =>
    $hasUnderline ? "underline" : "none"};
`;

export const StyledTitle = styled.p`
  color: ${props => props.theme.grey800};
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const StyledResult = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
`

