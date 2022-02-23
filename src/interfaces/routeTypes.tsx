export interface IRoute {
    path: string;
    exact: boolean;
    key: string;
    component: React.ElementType;
  }