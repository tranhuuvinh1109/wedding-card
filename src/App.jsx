import './App.css';
import { Address, Message, Poster, Time } from './components';

function App() {
  return (
    <div>
      <div className="w-[800px] mx-auto bg-content">
        <Poster />
        <Time />
        <Message />
        <Address />
      </div>
    </div>
  );
}

export default App;
