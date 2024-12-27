/* eslint-disable */
import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

// const Dashboards = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ './dashboards')
// );
// const NewsLetter = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ './newsletter')
// )

const Contacts = React.lazy(() =>
  import(/* webpackChunkName: "contacts" */ './contacts')
);

// const Coupons = React.lazy(() =>
//   import(/* webpackChunkName: "contacts" */ './coupons')
// );
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);
const Profile = React.lazy(() => import(/* webpackChunkName: "menu" */ './profile'));

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/contacts`}
            />
            {/* <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            /> */}
            {/* <Route
              path={`${match.url}/news-letter`}
              render={(props) => <NewsLetter {...props} />}
            /> */}
            {/* <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            /> */}
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/contacts`}
              render={(props) => <Contacts {...props} />}
            />
            {/* <Route
              path={`${match.url}/coupons`}
              render={(props) => <Coupons {...props} />}
            /> */}
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/profile`}
              render={(props) => <Profile {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
