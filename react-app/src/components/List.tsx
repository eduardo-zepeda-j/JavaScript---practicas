import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const [varIndex, setVarIndex] = useState(-1);
  const handleClick = (index: number, elemento: string) => {
    setVarIndex(index);
    console.log(`${index + 1} - ${elemento}`);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, index) => (
        <li
          onClick={() => handleClick(index, elemento)}
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
