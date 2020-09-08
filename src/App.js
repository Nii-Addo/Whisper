import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Details from './pages/Details';
import PageNotFound from './pages/PageNotFound';
import './App.css';
const AppRoutes = () => {
  return ( <Switch>
      <Route path="/registration">
        <Signup/>
      </Route>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route path="/blog">
        <Home tittle={posts.firstPost.tittle} author={posts.firstPost.author} date={posts.firstPost.date} content={posts.firstPost.content}/>
      </Route>
      <Route path="/details">
        <Details tittle={posts.firstPost.tittle} author={posts.firstPost.author} date={posts.firstPost.date} content={posts.firstPost.content}/>
      </Route>
      <Route path="*">
        <PageNotFound/>
      </Route>
    </Switch> );
};

function App() {
  return ( <Router>
        <div>
          <AppRoutes/>
        </div>
    </Router> );
}
const posts = {
  'firstPost': {
    id: '1',
    tittle: "In the Chest of a woman",
    author: "Ama Ata Aidoo",
    date: "2nd September,2019",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui leo. Donec porttitor sem a ante semper, mattis sodales erat commodo. Fusce commodo lacus arcu, vel tincidunt neque mattis sit amet. Nulla finibus justo nec diam sollicitudin bibendum. Aliquam erat volutpat. Duis quis nisi erat. Morbi porta dolor sed sodales sagittis. Maecenas dignissim egestas posuere. Sed rhoncus dignissim cursus. Aenean in mauris ac nunc varius accumsan quis quis augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sagittis vehicula metus, a sodales libero ultrices id. Morbi ante felis, lobortis maximus porta ac, rhoncus a felis. Etiam eget placerat urna, sed posuere ligula. Maecenas commodo enim at semper fringilla. Nunc suscipit arcu enim.Sed ut molestie tellus.Quisque laoreet erat quis ligula pretium, eget tincidunt urna congue.Proin vitae elit rhoncus, volutpat arcu eu, sagittis massa.Phasellus egestas tristique elit, at dictum elit vehicula ac.Pellentesque metus ex, ornare et pellentesque non, viverra at dolor.Sed tincidunt urna scelerisque, iaculis arcu eu, venenatis nunc.Ut varius felis velit, nec rhoncus tortor imperdiet ac.Donec ut nisi faucibus, facilisis turpis a, gravida urna.Aliquam mollis venenatis sem nec maximus.Nunc viverra ipsum a dui elementum venenatis.Quisque eleifend tellus at arcu maximus, vitae congue tellus blandit.Nunc in urna sodales, cursus libero vitae, rhoncus risus.Sed quis mi et nulla venenatis condimentum vel et mauris.Vivamus elementum, augue sed tincidunt finibus, massa lectus finibus dui, eu faucibus ipsum dui in lorem.Integer a nulla laoreet, pharetra nunc quis, viverra enim.Phasellus ullamcorper volutpat pellentesque.Nam vitae finibus est.Aenean imperdiet est ac enim gravida consectetur.Nunc nulla dolor, dapibus eget mauris sed, maximus euismod orci.Curabitur a mi a nisi placerat maximus.Nulla sed odio lacinia, faucibus diam eu, varius nunc.Pellentesque non sodales urna.Vestibulum porttitor augue sit amet dui scelerisque, a vestibulum massa tincidunt.Aliquam erat volutpat.Curabitur in sem dignissim, porta justo eget, fermentum augue.Suspendisse ligula nulla, venenatis suscipit velit in , tempus accumsan erat.Sed iaculis non purus id efficitur.Integer consectetur semper ex nec consectetur.Ut eleifend laoreet ante, at pretium turpis gravida id.Sed eleifend sit amet metus in molestie.Proin at arcu ligula.Nulla fermentum tincidunt eleifend.In et nunc ac ante cursus iaculis id ut sem.Fusce ultrices leo eget nisl aliquam, pharetra accumsan arcu bibendum.Ut nec semper neque.Nulla maximus lectus id ante luctus semper.Morbi in congue eros.Suspendisse sit amet dolor quis dolor rutrum vehicula.Nam at felis purus.Aenean sed ornare dolor, in facilisis lectus.Mauris tincidunt nibh fringilla rhoncus euismod.Quisque eu tellus ipsum.Proin et massa nec ante cursus elementum a a lacus.",
  }
}
export default App;