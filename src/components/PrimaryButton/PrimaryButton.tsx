type PrimaryButtonProps = {
  buttonText: string;
  onClick: () => void;
  color: "blue" | "white";
};

export default function PrimaryButton({
  buttonText,
  onClick,
}: PrimaryButtonProps) {
  return <button onClick={onClick}>{buttonText}</button>;
}
