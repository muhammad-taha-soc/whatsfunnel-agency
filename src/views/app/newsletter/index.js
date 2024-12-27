import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
// import CreateNewTemplate from './createNewTemplate';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

// const DashboardNewsLetter = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-default" */ './default')
// );
// const CreateNewsLetter = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-content" */ './createNewsLetter')
// );
// const CreateNewTemplate = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-content" */ './createNewTemplate')
// );


const NewsLetter = ({ match }) => {
    console.log({match});
    return (
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          {/* <Redirect
            exact
            from={`${match.url}/news-letter`}
            to={`${match.url}/news-letter`}
          />
          <Route
            path={`${match.url}/create-news-letter`}
            render={(props) => <CreateNewsLetter {...props} />}
          />
          <Route
            path={`${match.url}/create-new-template`}
            render={(props) => <CreateNewTemplate {...props} />}
          />
          <Route
            path={`${match.url}`}
            render={(props) => <DashboardNewsLetter {...props} />}
          /> */}
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    );};
export default NewsLetter;
