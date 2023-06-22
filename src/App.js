import React from "react";
import AppHeader from "./Components/Header/AppHeader";
import AppAbout from "./Components/About/AppAbout";
import AppContact from "./Components/Contact/AppContact";
import AppService from "./Components/About/AppService";
import AppCLients from "./Components/Clients/AppCLients";
import AppPortfolio from "./Components/Portfolio/AppPortfolio";

function App() {
  return (
    <div>
      <AppHeader />
      <AppAbout />
      <AppService />
      <AppPortfolio />
      <AppCLients />
      <AppContact />
    </div>
  );
}

export default App;
