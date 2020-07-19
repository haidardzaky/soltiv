import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import DynamicScrollToTop from './components/general/DynamicScrollToTop';

class Routing extends React.Component {
  render() {
    return (
    <div>
      <Router>
        <DynamicScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/portfolio/detail" component={PortfolioDetail}/>
          </Switch>
        </DynamicScrollToTop>
      </Router>
    </div>)
  }
}

export default Routing;
