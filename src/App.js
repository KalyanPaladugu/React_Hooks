import './App.css';
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
function App() {
  return (
    <div className="App">
        {/* <h1>welcome to React Hooks</h1> */}
       <IntervalClassCounter/>
       <IntervalHookCounter/>
    </div>
  );
}

export default App;
