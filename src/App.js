import { CssBaseline } from "@mui/material";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Basket from "./components/Basket/Basket";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./assets/StateProvider";
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./assets/PrivateRoute";


const promise = loadStripe('pk_test_51JOrCRH2MDO0OCdZ4xZMo8diiXoWockkthBKvr5tl1eCEynJDipEFTK5pY3t07wGUqgP7o50kjV8TkZ8lDFNtDyg00tRiVBz3e')

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="">
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/orders" component={Orders} />
          <Elements stripe={promise}>
            <PrivateRoute exact path="/checkout" component={Checkout} />
          </Elements>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
