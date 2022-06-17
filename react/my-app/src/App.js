import './App.css';

import Hello from './components/Hello'
import HiMessage from './components/HiMessage'
import MeuCard from './components/MeuCard'

function App() {
  return (
    <div>
      <Hello name="Fulano" idade={15} />
      <HiMessage message="Sicrano" />
      
      <MeuCard titulo="Card">
        <h3>R$ 30,00</h3>
        <h5>R$ 20,00</h5>
      </MeuCard>
    </div >
  );
}

export default App;
