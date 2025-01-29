import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import { HiAnnotation } from "react-icons/hi";

/**
 * Truthy -> Cualquier valor que no sea falsy
 * Falsy -> false, 0, "", null, undefined, NaN
 *
 */

function App() {
  const [data, setData] = useState(["Goku", "Vegeta", "Piccolo", "Gohan"]);
  // jsx -> React.createElement('p', null, 'Hola Mundo');

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);
  // const list: string[] = ["Goku", "Vegeta", "Piccolo", "Gohan"];
  // const handleSelect = (elemento: string) => {
  //   console.log("Imprimiendo: ", elemento);
  // };

  // const contenido =
  //   list.length !== 0 ? (
  //     <List data={list} onSelect={handleSelect} />
  //   ) : (
  //     "Sin Contenido"
  //   );

  // // -------------------------------------
  // return (
  //   <Card>
  //     <CardBody title="Hola Mundo" text="Esto es una prueba" />
  //     {contenido}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Haz Click
  //     </Button>
  //   </Card>
  // );
  const addMinion = () => {
    setData([...data, "Minion"]);
  };
  const delMinion = () => {
    setData(data.slice(0, data.length - 1));
  };
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);

  const [sent, setSent] = useState(false);
  const handleClick = () => setSent(!sent);
  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        Eliminar
      </Button>
      <List data={data}></List>
      <Alert status={status} onClick={toggleStatus}>
        Alert
      </Alert>

      <Button sent={sent} onClick={handleClick}>
        Enviar
      </Button>
    </Card>
  );
}

export default App;
