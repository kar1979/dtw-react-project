import './assets/style.css';
import SiteTitle from './components/SiteTitle';
import Home from './routes/Home';
import PostsDetails from './routes/PostDetails';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store'

export default function App() {
  return (
    <Router>
      <header>
        <SiteTitle />
      </header>

      <Switch>
        <Provider store={store}>
        {/* <PostContextProvider> */}
          {/* <CommentContextProvider> */}
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/details/:id">
              <PostsDetails />
            </Route>
          {/* </CommentContextProvider> */}
        {/* </PostContextProvider> */}
        </Provider>
      </Switch>
      <Footer />
    </Router>
  );
}
