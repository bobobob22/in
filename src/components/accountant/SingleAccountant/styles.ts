import styled from "styled-components";

export const AccCard = styled.div`
  border-radius: 1.6rem;
  border: 1px solid ${props => props.theme.grey200};
  padding: 2.4rem;
  width: 300px;
  margin-bottom: 2.4rem;
`;

export const AccHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
`;

export const AccTitle = styled.p`
  color: ${props => props.theme.grey800};
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const AccName = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
`;

export const AvatarWrapper = styled.div`
  margin-right: 1.6rem;
`;

export const AccAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 0.8rem;
`;

export const StyledPrice = styled.span`
  font-size: 1.2rem;
`