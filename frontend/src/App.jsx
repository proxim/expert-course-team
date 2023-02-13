import { Route, Switch } from 'wouter';
import About from './pages/about';
import Home from './pages/home';
import Navbar from './components/navbar';
import './App.css';

function App () {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch>
        </>
    );
}

export default App;