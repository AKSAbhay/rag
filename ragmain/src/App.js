import './App.css';
import { React, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './gcomponents/Header';
import Footer from './gcomponents/Footer';
import Payments from './gcomponents/Payments';
import ViewBill from './gcomponents/ViewBill';
import Deposits from './gcomponents/Deposits';
import Invoice from './gcomponents/Invoice';
import Home from './gcomponents/Home';
import OneSignal from 'react-onesignal';
import SignInOutContainer from './containers';


function App() {

  const[loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    OneSignal.init({
      appId: "b539af73-3314-4b40-b291-5340ccde4862"
    });
  }, []);

  return (
    <>
    {loggedIn ? 
      (<BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/payments" element={<Payments />}></Route>
        <Route path="/view-bill" element={<ViewBill />}></Route>
        <Route path="/deposits" element={<Deposits />}></Route>
        <Route path="/view-invoice" element={<Invoice />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter> ) : <SignInOutContainer/>
    }
    </>
  );
}

export default App;
