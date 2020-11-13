import Button, { ButtonProps } from '@material-ui/core/Button';

const ButtonComponent = ({ children, ...props }: ButtonProps): JSX.Element => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
