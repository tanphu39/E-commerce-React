import React from 'react';
import { Route } from 'react-router-dom'
import { IRoute } from 'interfaces/routeTypes';

function PublicRoute(props: IRoute): React.ReactElement {
  const { component: Component, ...rest } = props;
  const render = (props: any) => {
    if (!Component) {
      return null;
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={() => render(props)} />;
}

export default PublicRoute;