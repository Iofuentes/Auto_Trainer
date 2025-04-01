import './Button.css'

interface Props {
    children: string;
    onType: string;
}

const Button = ({ children, onType }: Props) => {
  return (
    <button className={onType}> {children} </button>
  );
}

export default Button