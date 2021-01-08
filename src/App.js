
import './App.css';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import Resume from './pages/Resume';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/Details" component={SingleProject} />
        <Route path="/Resume" component={Resume} />
        <Route path="/" component={Projects} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
