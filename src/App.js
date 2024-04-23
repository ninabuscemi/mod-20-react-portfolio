import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound'; // Optional

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} /> {/* Optional 404 page */}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;