import React from 'react';
import { render } from '../testUtils';
import App from 'pages/index';

describe('App', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(<App />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
