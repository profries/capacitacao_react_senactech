import './App.css';

import Hello from './components/Hello'
import HiMessage from './components/HiMessage'

function App() {
  return (
    <>
      <Hello name="Fulano" idade={30} />
      <HiMessage message="Sicrano" />
    </>
  );
}

export default App;
