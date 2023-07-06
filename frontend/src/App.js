
import './App.css';
import Header from "./component/layout/Header/Header.js"
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from "webfontloader";
import React, { useState, useEffect } from 'react';
import Footer from './component/layout/Footer/Footer.js';
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import { loadUser } from './actions/userAction';
import store from "./store";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Payment from './component/Cart/Payment';
import axios from 'axios';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/admin/Dashboard';
import ProductList from './component/admin/ProductList';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import OrderList from './component/admin/OrderList';
import ProcessOrder from './component/admin/ProcessOrder';
import UsersList from './component/admin/UserList';
import UpdateUser from './component/admin/UpdateUser';
import ProductReviews from './component/admin/ProductReviews';
import Contact from './component/layout/Contact/Contact';
import About from './component/layout/About/About';
import NotFound from './component/layout/NotFound/NotFound';

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");

      setStripeApiKey(data.stripeApiKey);
    } catch (error) {

    }
  }


  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);
  return (

    <HashRouter >
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/account' element={<Profile />} />
        <Route path='/' element={<ProtectedRoute />} />
        <Route path='/me/update' element={<UpdateProfile />} />
        <Route path='/password/update' element={<UpdatePassword />} />
        <Route path='/password/forgot' element={<ForgotPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login/shipping' element={<Shipping />} />
        <Route path='/order/confirm' element={<ConfirmOrder />} />
        {stripeApiKey && (

          <Route path='/process/payment' element={<Elements stripe={loadStripe(stripeApiKey)}><Payment /></Elements>} />

        )}

        <Route path='/success' element={<OrderSuccess />} />
        <Route path='/orders' element={<MyOrders />} />

        <Route path='/order/:id' element={<OrderDetails />} />

        <Route
          isAdmin={true}
          path="/admin/dashboard"
          element={<Dashboard />}
        />
        <Route
          isAdmin={true}
          path="/admin/products"
          element={<ProductList />}
        />
        <Route
          isAdmin={true}
          path="/admin/product"
          element={<NewProduct />}
        />
        <Route
          isAdmin={true}
          path="/admin/product/:id"
          element={<UpdateProduct/>}
        />

       <Route
          isAdmin={true}
          path="/admin/orders"
          element={<OrderList/>}
        />
        <Route
          isAdmin={true}
          path="/admin/order/:id"
          element={<ProcessOrder/>}
        />
        <Route
          isAdmin={true}
          path="/admin/users"
          element={<UsersList/>}
        />
         <Route
          isAdmin={true}
          path="/admin/user/:id"
          element={<UpdateUser/>}
        />
         <Route
          isAdmin={true}
          path="/admin/reviews"
          element={<ProductReviews/>}
        />
        <Route
         element ={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
