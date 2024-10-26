import Card, { CardBody } from "./components/Card";
import List from "./components/List";

/**
 * esto es en TS y JS
 * truthy: cualquier valor que no sea falsy
 * falsy: false, 0, "", null, undefined, NaN
 */

function App() {
  const list: string[] = ["Goku", "Vegeta", "Piccolo", "Gohan", "Trunks"];
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };

  /**
   * 
   
  * const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );
  */

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
    </Card>
  );
}

export default App;
