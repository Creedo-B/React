import './App.scss';
import Theme from './themeApp/Theme';
import Timer from './timerApp/Timer';
import TodoAppHome from './todoApp/TodoAppHome';

function App() {
  return (
    <div className="App">

      {/* Theme App */}
      <Theme/>

      {/* Timer App */}
      <Timer/>

      {/* todo List App */}
      <TodoAppHome/>
    </div>
  );
}

export default App;
