import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // jsx -> React.createElement('p', null, 'Hola Mundo');
  const list = ["Goku", "Vegeta", "Trunks", "Gohan"];

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Esto es una prueba" />
      <List data={list} />
    </Card>
  );
}

export default App;
