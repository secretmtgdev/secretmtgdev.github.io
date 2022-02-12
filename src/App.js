import './App.css';
import Backtracking from './components/backtracking';
import BinarySearch from './components/binarySearch';
import DynamicProgramming from './components/dynamicProgramming';
import Graphs from './components/graphs';
import Linkedlists from './components/linkedlists';
import SlidingWindow from './components/slidingWindow';
import Stacks from './components/stacks';
import Trees from './components/trees';

function App() {
  return (
    <div className="App">
      <h1 data-level='2'>Cracking the FAANG interviews</h1>
      <Stacks />
      <BinarySearch />
      <SlidingWindow />
      <Linkedlists />
      <Backtracking />
      <Graphs />
      <Trees />
      <DynamicProgramming />
    </div>
  );
}

export default App;
