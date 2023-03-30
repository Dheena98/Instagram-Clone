import React from 'react';
import './App.css';
import LandingPage from './LandingPage/landing_page';
import PostView from './PostView/post_view';
import NewPost from './NewPost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/post-view" component={PostView} />
          <Route path="/new-post" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
