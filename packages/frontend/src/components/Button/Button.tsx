import "./Button.scss";

export default function Button({ text }: ButtonProps) {
  return (
    <button className="button" type="button">
      { text }
    </button>
  )
}

interface ButtonProps {
  text: string;
}
