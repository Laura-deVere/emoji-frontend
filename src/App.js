import { useEffect } from 'react'
import {
  Switch,
  Route,
  useHistory
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
      history.push("/home");
    }
  }, [currentUser]);

  return (
    // <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home">
          <CurrentUser />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      <Footer />
    </div>
    // </Router>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return { currentUser: state.auth.isAuthenticated }
}

export default connect(mapStateToProps)(App);
