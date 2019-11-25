import React from "react";
import "./App.css";
import "./icon/flaticon.css"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import httpClient from './httpClient'


// import components
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import ProductsPage from "./sitePages/ProductsPage";
import ContactsPage from "./sitePages/ContactsPage";
import HomePage from "./sitePages/HomePage";
import LogIn from "./components/auth/LogIn";
import LogOut from "./components/auth/LogOut";
import SignUp from "./components/auth/SignUp";
import Admin from "./components/auth/RTH";

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}
  render() {
    const { currentUser } = this.state
    return (
        <div>
          <Router>
          <Navbar currentUser={currentUser} />

          <Switch>
            <Route exact path="/login" render={(props) => {
              return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
            }} />

            <Route exact path="/logout" render={(props) => {
              return <LogOut onLogOut={this.logOut.bind(this)} />
            }} />

            {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
            <Route exact path="/signup" render={(props) => {
              return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
            }} />

            <Route exact path="/admin" render={() => {
              return currentUser
                ? <Admin />
                : <Redirect to="/login" />
            }} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <div className="black">
              <Route exact path="/contacts" component={ContactsPage} />
            </div>
          </Switch>
          <Footer />
          </Router>
      </div>
    );
  }
}
export default App;
