import { StyledButton } from "./styles";

interface IButton {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: IButton) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
