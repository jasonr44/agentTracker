import React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';

export default ({ children, ...props }: ContainerProps): JSX.Element => {
  return (
    <Container {...props} disableGutters maxWidth={false}>
      {children}
    </Container>
  );
};
