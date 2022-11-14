import { Button } from "antd";
import "./index.css";

declare const ButtonTypes: [
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text"
];
export declare type ButtonType = typeof ButtonTypes[number];

interface ButtonProps {
  title: string;
  buttonType: ButtonType;
  color: string;
  borderRadius?: number;
  onClick?: () => void;
}

export function CustomButton(props: ButtonProps): JSX.Element {
  const defaults = {
    borderRadius: 8,
  };

  props = { ...defaults, ...props };

  return (
    <Button
      type={props.buttonType}
      className={`Default-${props.color} Border-${props.borderRadius}`}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
}
