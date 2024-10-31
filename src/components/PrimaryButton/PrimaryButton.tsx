import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  buttonText: string;
  onClick: () => void;
  color: "blue" | "white";
};

export default function PrimaryButton({
  buttonText,
  onClick,
  color,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${
        color === "blue" ? styles.blue : styles.white
      } montserrat-bold`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
