import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import CardContext from '../context/CardProviderJO';

const CardForm = ({ started }) => {
	const deckId = useContext(CardContext);
	const [image, setImage] = useState('');
	const [newCard, setNewCard] = useState(null);

	useEffect(() => {
		const fetchCardImage = async () => {
			const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
			const { data } = await axios.get(url);
			setImage(data.cards[0].image);
		};

		if (started && deckId) {
			fetchCardImage();
		}
	}, [started, deckId]);

	const handleNewCard = async () => {
		const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
		const { data } = await axios.get(url);
		setNewCard(data.cards[0]);
	};

	return (
		<div>
			{started && image && (
				<div>
					<img src={image} alt='Carta' />
					{newCard && (
						<div>
							<img src={newCard.image} alt='Nueva carta' />
							<button onClick={handleNewCard}>Obtener nueva carta</button>
						</div>
					)}
					{!newCard && (
						<button onClick={handleNewCard}>Obtener nueva carta</button>
					)}
				</div>
			)}
		</div>
	);
};

export default CardForm;
