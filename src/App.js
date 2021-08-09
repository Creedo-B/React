import './App.scss';
import Theme from './themeApp/Theme';
import Timer from './timerApp/Timer';
import TimerFun from './timerApp/TimerFun';
import TodoAppHome from './todoApp/TodoAppHome';

function App() {
  return (
    <div className="App">

      {/* Theme App */}
      <Theme/>

      {/* Timer App */}
      <Timer/>

      {/* Functional version of the Timer App */}
      <TimerFun/>

      {/* todo List App */}
      <TodoAppHome/>
    </div>
  );
}

export default App;
