import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Courses from './components/Courses';
import Course from './components/Course';
import Lesson from './components/Lesson';

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/">Home</Link>
        {' '}     
        <Link to="/courses">Courses</Link>
        {' '}
        <Link to="/about">About</Link>
        {' '}

      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path={`/courses/:id`} component={Course} />
          <Route exact path={`/courses/:id/lessons/:lessonId`} component={Lesson} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
