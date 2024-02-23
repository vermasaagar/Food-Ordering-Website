
import Header from "./components/Header";
import {Outlet} from "react-router-dom";


import React, { useEffect, useState } from "react";
import UserContext from './components/utils/UserContext';
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";


function App() {
  
const [userName, setUserName] = useState();

useEffect(()=>{
  const data = {
    name: "Sagar Verma",
  };
  setUserName(data.name);
}, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
    </UserContext.Provider>
    </Provider>
    
    
  );
}






export default App;
