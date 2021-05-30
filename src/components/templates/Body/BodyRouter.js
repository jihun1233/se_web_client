import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import DefaultBoard from '../Board/DefaultBoard';
import ReadPost from '../Post/ReadPost';
// import CreatePost from '../Post/CreatePost';
// import AnonymousCreatePost from '../Post/AnonymousCreatePost';
import CreatePostRouter from '../Post/CreatePostRouter';

const BodyRouter = () => {
  // const checkToken = () => {
  //   const token = localStorage.getItem('token');
  //   if (token) return true;
  //   return false;
  // };
  return (
    <div>
      <Switch>
        <Route
          path="/board/:boardId?/:direction?/:page?/:size?"
          render={({ match, location, history }) => (
            <DefaultBoard key={location.key} match={match} history={history} />
          )}
        />
        <Route
          path="/post/:postId?"
          render={({ match, location, history }) => (
            <ReadPost key={location.key} match={match} history={history} />
          )}
        />
        <Route exact path="/">
          <Redirect to="/board/1" />
        </Route>

        <Route
          path="/writepost/:boardId?"
          render={({ match, location, history }) => (
            <CreatePostRouter
              key={location.key}
              match={match}
              history={history}
            />
          )}
        />

        <Route path="/c">c</Route>
        <Route path="*">page not found</Route>
      </Switch>
    </div>
  );
};

BodyRouter.propTypes = {};

export default BodyRouter;
