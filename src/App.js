import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import DiscoverBattle from'./Components/DiscoverBattle';
import PopularBattle from './Components/PopularBattle';
import Popular from './Components/Popular';
import MyList from './Components/MyList';

import 'bootstrap/dist/css/bootstrap.min.css';
import Discover from './Components/Discover';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/battle">
              <PopularBattle/>
            </Route>
            <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route path="/my-list/">
              <MyList />
            </Route>
            <Route path="/">
              <Discover />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;










// Clé de l'API (v3 auth)
// 4761f779a2abf8d89a78b9b94bfde5ab