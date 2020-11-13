import Container, { ContainerProps } from '@material-ui/core/Container';

const ContainerComponent = ({
  children,
  ...props
}: ContainerProps): JSX.Element => {
  return <Container {...props}>{children}</Container>;
};

export default ContainerComponent;
