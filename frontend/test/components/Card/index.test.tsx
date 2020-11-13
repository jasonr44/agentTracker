import React from 'react';
import { render } from 'test/testUtils';
import userEvent from '@testing-library/user-event';
import Card, { CardType, CardProps } from 'components/Card';

const cardAction = jest.fn();

const CARD_PROPS: CardProps = {
  type: CardType.IMAGE,
  title: 'cardTitle',
  content: 'Some content.',
  image: '/public/test.jpg',
  actions: [{ label: 'first', action: cardAction }],
};

describe('Card', () => {
  it(`Should render a card with an image if of type ${CardType.IMAGE}`, () => {
    const { queryByRole, queryByTestId } = render(<Card {...CARD_PROPS} />);
    expect(queryByRole('img')).toBeTruthy();
    expect(queryByTestId('card-component')).toBeTruthy();
  });

  it(`Should render a card with NO image if NOT of type ${CardType.IMAGE}`, () => {
    const { queryByRole, queryByTestId } = render(
      <Card {...CARD_PROPS} type={CardType.DEFAULT} />
    );
    expect(queryByRole('img')).toBeNull();
    expect(queryByTestId('card-component')).toBeTruthy();
  });

  it('Runs the appropriate action when an action is clicked', () => {
    const { queryAllByRole } = render(<Card {...CARD_PROPS} />);

    userEvent.click(queryAllByRole('button', { name: /first/ })[0]);
    expect(cardAction).toHaveBeenCalledTimes(1);
  });

  it.todo('Should navigate to correct path on click.');
});
