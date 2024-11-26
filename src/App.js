import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './Components/FooterComponent';
import NavbarComponent from './Components/NavbarComponent';
import MainComponent from './Components/MainComponent';

function App() {
  const [genre, setGenre] = useState(null); // Stato per memorizzare il genere selezionato

  // Funzione per gestire la selezione del genere
  const handleSelectGenre = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <NavbarComponent onSelectGenre={handleSelectGenre} />

      {/* Main Content */}
      <MainComponent genre={genre} />

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
