import Counter from "./components/Counter";
import Selector from "./components/Selector";
import MyClock from "./components/MyClock";

function App() {
  return <>
    <div>
      <Counter/>
    </div>
    <br/>
    <div>
      <Selector/>
    </div>
    <br/>
    <div>
      <MyClock />
    </div>
  </>;
}

export default App;