import React from 'react';
import Container from '@material-ui/core/Container';

export default ({ children }) => {
  return (
    <Container disableGutters maxWidth={false}>
      {children}
    </Container>
  );
};
