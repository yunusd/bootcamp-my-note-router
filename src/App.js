import Layout from './app/layout';
import Notes from './app/main/notes';
import Note from './app/main/note';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Notes} exact />
          <Route path="/note/:id" component={Note} exact />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
