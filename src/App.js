import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Contact from './pages/Contact/Contact';
import Hamburger from './components/Hamburger/Hamburger';
import Navigation from './components/Navigation/Navigation';
import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';
import Copyright from './components/Copyright/Copyright';
import Header from './components/UI/Header';
function App() {
    return (
        <Fragment>
            <Header />
            <Navigation />
            <Switch>
                <Route path="/" exact>
                    <Landing />
                    <About />
                    <Contact />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
            </Switch>
            <Copyright />
        </Fragment>
    );
}

export default App;
