
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './PortfolioContainer/AboutMe/About';
import Footer from './PortfolioContainer/Footer/Footer';
import topbutton from './PortfolioContainer/topButton/TopButton'
import Home from './PortfolioContainer/Home/Home';
import Education from './PortfolioContainer/Education/Education';
import Experience from './PortfolioContainer/Experience/Experience';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import TopButton from './PortfolioContainer/topButton/TopButton';

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
      <GlobalStyles />
    <BrowserRouter>
    <Navbar theme={chosenTheme.headerColor}/>
    <Switch >
     <Route  exact path="/" component={About}/>
     <Route  exact path="/home" component={Home }/>
     <Route  exact path="/education" component={Education}/>
     <Route  exact path="/about" component={Experience}/>
   </Switch>
   <Footer theme={chosenTheme}/>
   {/* <TopButton theme={chosenTheme}/> */}
   </BrowserRouter>
   </>
   </ThemeProvider>
  );
}

export default App;
