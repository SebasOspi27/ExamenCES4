import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [deckId, setDeckId] = useState('');

  useEffect(() => {
    const fetchDeckId = async () => {
      const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
      const { data } = await axios.get(url);
      setDeckId(data.deck_id);
    };

    fetchDeckId();
  }, []);

  return (
    <CardContext.Provider value={deckId}>
      {children}
    </CardContext.Provider>
  );
};

export { CardProvider };
export default CardContext;
