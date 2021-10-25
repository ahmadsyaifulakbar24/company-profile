import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import './App.css'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Product from './pages/product/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/product" component={Product} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
