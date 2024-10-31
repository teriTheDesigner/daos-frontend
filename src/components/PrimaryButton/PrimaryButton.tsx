import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  buttonText: string;
  onClick: () => void;
  color: "blue" | "white";
  size: "medium" | "large";
};

export default function PrimaryButton({
  buttonText,
  onClick,
  color,
  size,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${color === "blue" ? styles.blue : styles.white}
        ${size === "medium" ? styles.medium : styles.large} montserrat-bold`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
