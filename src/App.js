import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Edit from "./components/users/Edit"; 
import Form from "./components/users/Form"; 
import NotFound from './components/pages/NotFound';
import Search from './components/pages/Search'
import View from './components/pages/View'
// className="main-body"
import "./styles/section.css"
const App = () => {
  return (
    <div  className="container">
      <div>
      <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={Section} />
        <Route path="/users/add" exact component={Form} />
        <Route path="/users/edit/:id" exact component={Edit} />
        <Route path="/user/view/:id" exact component={View} />
        <Route path="/users/search" exact component={Search} />
        <Route component={NotFound} />
        </Switch>
      </Router>
      </div>
    </div>

  );
}

export default App;
