import { CardProvider } from './context/CardProviderJO';
import FormNombreJO from './components/FormNombreJO';
import FormCardJO from './components/FormCardJO';

const App = () => {
  return (
    <CardProvider>
      <div>
        <h1>My App</h1>
        <FormNombreJO />
		<FormCardJO />
      </div>
    </CardProvider>
  );
};

export default App;
