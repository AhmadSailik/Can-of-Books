import React from 'react';
import Header from './header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login';
import MyFavoriteBooks from './myFavoriteBooks';
import Profile from './profile'
import LoginButton from './loginButton'
import {withAuth0} from '@auth0/auth0-react'
class App extends React.Component {

  render() {
    console.log('app', this.props)
    // const { user,isAuthenticated } = this.props.auth0;
    return(
      
      <>
     
        <Router>
        
          {/* <IsLoadingAndError> */}
          <Header />
              <Switch>
                <Route exact path="/">
               
                {this.props.auth0.isAuthenticated ?<MyFavoriteBooks/>:<Login/>}
                </Route>
                
                  
                  
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  
                
                <Route path='/profile'component={Profile}>
                <Profile/>
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
// export default App;
