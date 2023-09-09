export interface IAccountResult {
  results: IAccountInfo[];
  info: {
    page: number;
  };
}

type GenderType = 'male' | 'female'

export interface IAccountInfo {
  gender: GenderType;
  cell: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
  registered: {
    age: number;
  };
  location: {
    city: string;
    country: string;
  }
}
