import { IAccountInfo } from "../../../types/accountant";
import { SingleAccountant } from "../SingleAccountant/SingleAccountant";
import { AccWrapper } from "./styles";

interface IAccountants {
  accountantsList: IAccountInfo[];

}

export const Accountants = ({
  accountantsList,
}: IAccountants) => {
  return (
    <AccWrapper>
      {accountantsList.map((accountant) => {
        return <SingleAccountant key={accountant.login.uuid} {...accountant} />;
      })}
    
    </AccWrapper>
  );
};
