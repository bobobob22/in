import { useState } from "react";
import { IAccountInfo } from "../../../types/accountant";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";
import { formatPriceToPLN } from "../../../utils/formatPriceToPln";
import { mockAverageAccountPrice } from "../../../utils/mockAverageAccountPrice";
import { AccRowData, StyledLink, StyledTitle, StyledResult } from "../AccountantStyles";
import {
  AccCard,
  AccHeader,
  AccTitle,
  AccName,
  AvatarWrapper,
  AccAvatar,
  StyledPrice,
} from "./styles";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";
import { Button } from "../../../ui/Button/Button";

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

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

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
          <StyledResult>
            {`${mockedAccountantPrice()} `}
            <StyledPrice>PLN</StyledPrice>
          </StyledResult>
        </AccRowData>

        {showMoreInfo ? (
          <>
            <AdditionalInfo location={rest.location} />
            <Button onClick={toggleMoreInfo}>
              Schowaj
            </Button>
          </>
        ) : (
          <Button onClick={toggleMoreInfo}>Dowiedz sie wiecej</Button>
        )}
      </div>
    </AccCard>
  );
};
