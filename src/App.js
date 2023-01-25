import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import ApplicationSingle_1 from './ApplicationSingle_1';
import ApplicationSingle_2 from './ApplicationSingle_2';
import ApplicationTeam_1 from './ApplicationTeam_1';
import ApplicationTeam_2 from './ApplicationTeam_2';
import ApplicationTeam_3 from "./ApplicationTeam_3";
import ApplicationSingle_3 from "./ApplicationSingle_3";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/application-1-single" component={ApplicationSingle_1} />
          <Route path="/application-2-single" component={ApplicationSingle_2} />
          <Route path="/application-3-single" component={ApplicationSingle_3} />
          <Route path="/application-1-team" component={ApplicationTeam_1} />
          <Route path="/application-2-team" component={ApplicationTeam_2} />
          <Route path="/application-3-team" component={ApplicationTeam_3} />
        </Switch>
      </Router>
  );
}

export default App;
