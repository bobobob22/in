import { AccRowData, StyledTitle } from "../AccountantStyles";

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
        <p>{country}</p>
      </AccRowData>

      <AccRowData>
        <StyledTitle>Miasto</StyledTitle>
        <p>{city}</p>
      </AccRowData>
    </>
  );
};
