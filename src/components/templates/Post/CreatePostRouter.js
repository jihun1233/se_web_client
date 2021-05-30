import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';

import CreatePost from './CreatePost';
import AnonymousCreatePost from './AnonymousCreatePost';

const CreatePostRouter = () => {
  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) return true;
    return false;
  };
  const [isLogin, setIsLogin] = useState(checkToken());
  useEffect(() => {
    setIsLogin(checkToken());
  }, []);
  if (isLogin) {
    return (
      <Route
        path="/writepost/:boardId?"
        render={({ match, location, history }) => (
          <CreatePost key={location.key} match={match} history={history} />
        )}
      />
    );
  }
  return (
    <Route
      path="/writepost/:boardId?"
      render={({ match, location, history }) => (
        <AnonymousCreatePost
          key={location.key}
          match={match}
          history={history}
        />
      )}
    />
  );
};

CreatePostRouter.propTypes = {
  // match: ReactRouterPropTypes.match.isRequired,
  // location: ReactRouterPropTypes.location.isRequired,
  // history: ReactRouterPropTypes.history.isRequired
};

export default CreatePostRouter;
