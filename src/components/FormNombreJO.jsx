import { useContext, useState } from 'react';
import CardContext from '../context/CardProviderJO';
import FormCardJO from '../components/FormCardJO';

const FormNombreJO = () => {
	const [nombre, setNombre] = useState('');
	const [started, setStarted] = useState(false);
	const deckId = useContext(CardContext);

	const handleInputChange = event => {
		setNombre(event.target.value);
	};

	const handleEmpezarClick = () => {
    console.log('Deck Id:', deckId)
		setStarted(true);
	};

	return (
		<div>
			<input
				type='text'
				value={nombre}
				onChange={handleInputChange}
				placeholder='Ingrese su nombre'
			/>
			<button onClick={handleEmpezarClick}>Empezar</button>
			{started && <FormCardJO started={started} />}
		</div>
	);
};

export default FormNombreJO;
