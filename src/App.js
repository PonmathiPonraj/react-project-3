import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './CartContext';
import AdminPage from './AdminPage/AdminPage';
import UserPage from './UserPage/UserPage';
import MainNavigation from './MainNavigation'; // Import MainNavigation
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Medicine Store</h1>
            {/* Use the MainNavigation component */}
            <MainNavigation />
          </header>
          <main>
            <Switch>
              <Route path="/admin" component={AdminPage} />
              <Route path="/store" component={UserPage} />
            </Switch>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;