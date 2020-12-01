import './assets/style.css'
import { PostContextProvider } from './context/post-context';
import { CommentContextProvider } from './context/comment-context';
import SiteTitle from './components/SiteTitle';
import Home from './routes/Home';
import PostsDetails from './routes/PostDetails';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <header>
        <SiteTitle />
      </header>

      <Switch>
        <PostContextProvider>
          <CommentContextProvider>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/details/:id">
              <PostsDetails />
            </Route>
          </CommentContextProvider>
        </PostContextProvider>
      </Switch>
      <Footer />
    </Router>
  );
}
