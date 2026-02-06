import React from "react";
import styles from "./Dynamiskknap.module.css";

type ButtonProps = {
  action: () => void;
  size: "small" | "medium" | "large";
  theme: "light" | "dark";
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ action, size, theme, text }) => {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[theme]}`} onClick={action}>
      {text}
    </button>
  );
};

// Andvendelse af knap eller button component
const DynamiskKnap = () => {
  return (
    <div>
      <Button action={() => alert("Du kan trykke på den lille knap!")} size="small" theme="light" text="Lille lys knap!" />
      <Button action={() => alert("Du kan trykke på mellem store mørke knap!")} size="medium" theme="dark" text="Mellem mørk knap!" />
      <Button action={() => alert("Du kan trykke på den store lys knap!")} size="large" theme="light" text="Store lys knap!" />
    </div>
  );
};
