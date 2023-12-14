import './App.css';
import { Address, Album, Message, MessageCongratulation, MusicPlayer, Poster, Time } from './components';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[800px] mx-auto bg-content">
        <Poster />
        <Time />
        <Message />
        <Address />
        <MusicPlayer />
        <MessageCongratulation />
        <Album />
        <div className="h-24"></div>
      </div>
    </div>
  );
}

export default App;
