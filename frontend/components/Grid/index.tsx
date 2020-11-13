import Grid, { GridProps } from '@material-ui/core/Grid';

const GridComponent = ({ children, ...props }: GridProps): JSX.Element => {
  return <Grid {...props}>{children}</Grid>;
};

export default GridComponent;
