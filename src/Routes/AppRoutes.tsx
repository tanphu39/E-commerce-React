import { Router, Switch, withRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import { publicRoutes } from "./config";
import { IRoute } from "interfaces/routeTypes";

function AppRoute(props: any) {
  const { history } = props;

  return (
    <Router history={history}>
      <Switch>
        {publicRoutes.map((route: IRoute) => (
          <PublicRoute {...route} key={route.key} />
        ))}
      </Switch>
    </Router>
  );
}

export default withRouter(AppRoute);
