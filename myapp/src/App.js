import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import {loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51I5RZrFJ6hrMuI6GeKiZc58cDVd5WbeWuVwFs5xcSKIpa3AsKbD7W84W9E27DSYwOiGtK6CVbWhTALmR11XXchVa00QZabNsgp');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      
      if (authUser){
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
      
      <Switch>
      <Route path="/orders">
        <Header />
          <Orders/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
      <Route path ="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path ="/payment">
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
      </Route>
      <Route path ="/">
      <Header />
      <Home />
      </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
