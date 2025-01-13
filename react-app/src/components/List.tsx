import { useState, ReactNode } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};


function List({ data, onSelect }: Props) {
  const [varIndex, setVarIndex] = useState(-1);
  const handleClick = (elemento: string, index: number) => {
    setVarIndex(index);
    onSelect?.(elemento);
    //console.log(`${index + 1} - ${elemento}`);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, index) => (
        <li
          onClick={() => handleClick(elemento, index)}
          key={elemento}
          className={`list-group-item ${varIndex == index ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
