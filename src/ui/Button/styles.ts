import styled from 'styled-components'

export const StyledButton = styled.button`
  box-shadow: unset;
  border: none;
  color: ${props => props.theme.blue600};
  background-color:  ${props => props.theme.blue50};
  min-width: 120px;
  padding: 0.8rem 1.6rem;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
`;
