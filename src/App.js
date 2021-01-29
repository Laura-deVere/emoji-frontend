import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  useHistory,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import './sass/App.scss';
import Nav from './Components/Nav';
import LandingPage from './Components/LandingPage';
import CurrentUser from './Components/User/CurrentUser';
import Footer from './Components/Footer';

export const App = ({ currentUser }) => {
  const history = useHistory();

  useEffect(() => {
    // if is User Logged In turned to true redirect to /user
    if (currentUser) {
      history.push("/dashboard");
    }
  }, [currentUser]);

  return (
    // <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/dashboard">
          <CurrentUser />
        </Route>
        <Route exact path="/">
          {currentUser ? <Redirect to="/dashboard" /> : <LandingPage />}
          {/* <LandingPage /> */}
        </Route>
      </Switch>
      <Footer />
    </div>
    // </Router>
  )
}

App.propTypes = {
  currentUser: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  // console.log(state);
  return { currentUser: state.auth.isAuthenticated }
}

export default connect(mapStateToProps)(App);
