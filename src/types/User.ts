export interface User {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  id: number | string;
  isOver18?: boolean;
}
