// MainComponent.js
import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function MainComponent({ genre }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funzione per caricare il JSON in base al genere
  const loadGenreData = async (genre) => {
    if (!genre) return;

    setLoading(true);
    setError(null);

    try {
        const response = await fetch(`${process.env.PUBLIC_URL}/JSON/${genre}.json`);
              if (!response.ok) {
                console.log("ciao")
        throw new Error(`Errore nel caricamento del file ${genre}.json`);
      }

      const data = await response.json();
      setCards(data); // Aggiorna lo stato con i dati del JSON
    } catch (err) {
      setError(err.message); // Gestisce l'errore di caricamento
    } finally {
      setLoading(false);
    }
  };

  // Effetto per caricare i dati quando il genere cambia
  useEffect(() => {
    loadGenreData(genre);
  }, [genre]);

  return (
    <main className="main-content">
      <h1>Benvenuto su EPILIBRARY!</h1>
      <p>
        Questa è la tua libreria virtuale. Scegli il genere dal menu per iniziare.
      </p>

      {/* Sezione di caricamento */}
      {loading && <p>Caricamento in corso...</p>}
      {error && <p className="text-danger">Errore: {error}</p>}

      {/* Card grid */}
      <Row className="g-4">
        {cards.length > 0 ? (
          cards.map((card) => (
            <Col key={card.asin} md={3}>
              <Card>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${card.price}
                  </Card.Text>
                  <button className="btn btn-primary">Scopri di più</button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Nessun libro trovato per il genere selezionato.</p>
        )}
      </Row>
    </main>
  );
}

export default MainComponent;
