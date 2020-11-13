import Typography, { TypographyProps } from '@material-ui/core/Typography';

const TypographyComponent = ({
  children,
  ...props
}: TypographyProps): JSX.Element => {
  return <Typography {...props}>{children}</Typography>;
};

export default TypographyComponent;
