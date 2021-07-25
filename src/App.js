import './App.css';
import Timer from './timerApp/Timer';
import TodoAppHome from './todoApp/TodoAppHome';

function App() {
  return (
    <div className="App">
      
      {/* Timer App */}
      <Timer/>

      {/* todo List App */}
      <TodoAppHome/>
    </div>
  );
}

export default App;
