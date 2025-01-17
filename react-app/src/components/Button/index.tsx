import { ReactNode } from "react";
import styles from "./Button.module.css";
import styled from "styled-components";

type BtnProps = {
  isLoading: boolean;
};

const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
  color: white;
  border-radius: 1.2rem;
  margin: 0.6rem;
  border: none;
  padding: 25px 30px;
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
// const styles = {
//   //sin en css la propiedad es nombre-propiedad
//   // en js o ts es nombrePropiedad
//   backgroundColor: "orange",
//   color: "white",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "none",
//   cursor: "pointer",
//   outline: "none",
//   margin: "5px",
// };
console.log(styles);

function Button({ children, isLoading, onClick }: Props) {
  // const className = [
  //   `btn btn-${isLoading ? "secondary" : "primary"}`,
  //   styles.button,
  //   styles.padded,
  // ].join(" ");

  return (
    <Btn
      // style={styles}
      onClick={onClick}
      disabled={isLoading}
      isLoading={isLoading}

      //className = {[styles.button,styles.padded].join(' ')}
      //className={className}
    >
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

export default Button;
