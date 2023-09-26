import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './store/CartContext';
import AdminPage from './AdminPage';
import UserPage from './UserPage';
import HomePage from './Home';
import MainNavigation from './MainNavigation'; // Import MainNavigation
import './App.css';
//import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <CartProvider>
      <Router>
       <div>
          <MainNavigation />
          <main>
            <Switch>
              <Route path='/home' exact ><HomePage/></Route>
              <Route path="/admin" exact><AdminPage/></Route>
              <Route path="/store" exact><UserPage/></Route>
            </Switch>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;