import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact">
                contact
            </Route>
            <Route exact path="/about">
                about
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
