import React from 'react';
import Tetris from './components/Tetris';
import ThemeContextProvider from "./contexts/ThemeContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Tetris />
      </ThemeContextProvider>
    </div>
  );
}

export default App;