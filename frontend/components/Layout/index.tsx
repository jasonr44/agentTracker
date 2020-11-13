import React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';
import ThemeWrapper from '../ThemeWrapper';

export default ({ children, ...props }: ContainerProps): JSX.Element => {
  return (
    <ThemeWrapper>
      <Container {...props} disableGutters maxWidth={false}>
        {children}
      </Container>
    </ThemeWrapper>
  );
};
