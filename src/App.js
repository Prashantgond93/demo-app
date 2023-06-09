// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Preview from "./components/Preview";
import Header from "./components/Header";
import AnimatedCard from "./rumble/animatedCard/AnimatedCard";
import DemoListing from "./rumble/demoListing/DemoListing";
import FooterComponent from "./rumble/footerComponent/FooterComponent";
import FeatureComponent from "./rumble/featureComponent/FeatureComponent";
import InfoSection from "./rumble/infoSection/InfoSection";

const App = () => {
  return (
    <div>
      {/* Other components */}
      <Preview />
      <InfoSection />
      <DemoListing />
      <FeatureComponent />
      <AnimatedCard />
      <FooterComponent />
      {/* <Header /> */}
      {/* <Home/> */}
    </div>
  );
};

export default App;
