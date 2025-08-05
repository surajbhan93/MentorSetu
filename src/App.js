import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
// import SignUp from './pages/SignUp/SignUp';
import StarterPlan from './pages/SignUp/StarterPlan';
import AdvancePlan from './pages/SignUp/AdvancePlan';
import PremiumPlan from './pages/SignUp/PremiumPlan';
import FreePlan from './pages/SignUp/FreePlan';
import JoinMentor from './pages/JoinMentor';
import JoinExpert from './pages/JoinExpert';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
        <Route path="/starter" component={StarterPlan} />
        <Route path="/advance" component={AdvancePlan} />
        <Route path="/premium" component={PremiumPlan} />
        <Route path="/free" component={FreePlan} />
        <Route path="/join-mentor" component={JoinMentor} />
        <Route path="/join-expert" component={JoinExpert} />
        <Route path="/About" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
