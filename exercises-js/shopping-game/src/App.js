import './App.css';
import MoneyLetter from './component/Money-letter';
import ShoppingStore from './component/Shopping-store';
import { useState } from 'react';

function App() {
  const views = { card: MoneyLetter, store: ShoppingStore }
  const [view, setView] = useState("card");

  const Control = views[view];
  const newView = view === "card" ? "store" : "card";

  return (
    <div className="App">
      <>
        <Control onClick={() => setView(newView)} />
      </>  
    </div>
  );
}

export default App;
