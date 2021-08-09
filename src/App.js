import './App.scss';
import Theme from './themeApp/Theme';
import Timer from './timerApp/Timer';
import TimerFun from './timerApp/TimerFun';
import TodoAppHome from './todoApp/TodoAppHome';
import {BrowserRouter, Route} from 'react-router-dom';
import SideNav from './common/SideNav';
import Home from './common/Home';

function App() {
  return (
    <BrowserRouter>
      
    <div className="app-container">

      <SideNav/>

      <Route exact path="/">
        <Home/>
      </Route>

        <Route path="/theme">
          {/* Theme App */}
          <Theme/>
        </Route>

        <Route path="/timer">
          {/* Timer App */}
          <Timer/>
        </Route>

        <Route path="/timerFun">
          {/* Functional version of the Timer App */}
          <TimerFun/>
        </Route>

        <Route path="/todo">
          {/* todo List App */}
          <TodoAppHome/>
        </Route>

    </div>

    </BrowserRouter>
  );
}

export default App;
