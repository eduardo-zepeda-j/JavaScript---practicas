import { ReactNode } from "react";
import styles from "./Button.module.css";
import styled from "styled-components";

const Btn = styled.button;

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
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
    styles.padded,
  ].join(" ");

  return (
    <button
      // style={styles}
      onClick={onClick}
      disabled={isLoading}
      //className = {[styles.button,styles.padded].join(' ')}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
