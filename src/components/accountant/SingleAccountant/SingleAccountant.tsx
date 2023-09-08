import { useState } from "react";
import { IAccountInfo } from "../../../types/accountant";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";
import { formatPriceToPLN } from "../../../utils/formatPriceToPln";
import { mockAverageAccountPrice } from "../../../utils/mockAverageAccountPrice";
import { AccRowData, StyledLink, StyledTitle } from "../AccountantStyles";
import {
  AccCard,
  AccHeader,
  AccTitle,
  AccName,
  AvatarWrapper,
  AccAvatar,
  StyledButton,
} from "./styles";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";

export const SingleAccountant = ({
  cell,
  name,
  email,
  picture,
  registered,
  ...rest
}: IAccountInfo) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const mockedAccountantPrice = () => {
    const mockedPrice = mockAverageAccountPrice(registered.age);
    return formatPriceToPLN(mockedPrice);
  };

  return (
    <AccCard>
      <AccHeader>
        <AvatarWrapper>
          <AccAvatar src={picture.medium} alt="Avatar ksiegowej" />
        </AvatarWrapper>
        <div>
          <AccTitle>Twoja księgowa</AccTitle>
          <AccName>{`${name.first} ${name.last}`}</AccName>
        </div>
      </AccHeader>

      <div>
        <AccRowData>
          <StyledTitle>E-mail</StyledTitle>
          <StyledLink href={`mailto:${email}`} hasUnderline>
            {email}
          </StyledLink>
        </AccRowData>

        <AccRowData>
          <StyledTitle>Telefon</StyledTitle>
          <StyledLink href={`tel:${cell}`}>
            {formatPhoneNumber(cell)}
          </StyledLink>
        </AccRowData>

        <AccRowData>
          <StyledTitle>Średnia cena netto uslugi / m-c</StyledTitle>
          <p>
            {`${mockedAccountantPrice()} `}
            <span>PLN</span>
          </p>
        </AccRowData>

        {showMoreInfo ? (
          <>
            <AdditionalInfo location={rest.location} />
            <StyledButton onClick={() => setShowMoreInfo(false)}>
              Schowaj
            </StyledButton>
          </>
        ) : (
          <StyledButton onClick={() => setShowMoreInfo(true)}>Dowiedz sie wiecej</StyledButton>
        )}
      </div>
    </AccCard>
  );
};
