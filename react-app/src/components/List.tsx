import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  //un hook es una función que permite agregar funcionalidades a un componente funcional
  //useState es un hook que permite agregar estado a un componente funcional
  const [index, setIndex] = useState(1);
  //el hook devuelve un arreglo con dos elementos,estos elementos son el estado actual y una función que permite actualizar el estado
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        // El key es necesario para que React pueda identificar
        // cada elemento de la lista
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
