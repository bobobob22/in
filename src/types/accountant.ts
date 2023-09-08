export interface IAccountResult {
  results: IAccountInfo[];
  info: {
    page: number;
  };
}

export interface IAccountInfo {
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
