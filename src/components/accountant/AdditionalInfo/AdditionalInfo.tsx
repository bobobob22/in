import { AccRowData, StyledTitle, StyledResult } from "../AccountantStyles";

interface IAdditionalInfo {
  location: {
    city: string;
    country: string;
  };
}

export const AdditionalInfo = ({
  location: { city, country },
}: IAdditionalInfo) => {
  return (
    <>
      <AccRowData>
        <StyledTitle>Kraj zamieszkania</StyledTitle>
        <StyledResult>{country}</StyledResult>
      </AccRowData>

      <AccRowData>
        <StyledTitle>Miasto</StyledTitle>
        <StyledResult>{city}</StyledResult>
      </AccRowData>
    </>
  );
};
