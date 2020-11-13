import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardProps, CardType, CardAction } from './types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const renderActions = (actions: CardAction[]) => {
  if (!actions.length) {
    return null;
  }

  return actions.map(({ label, action }) => {
    return (
      <Button
        key={label}
        name={label}
        size="small"
        color="primary"
        onClick={action}
      >
        {label}
      </Button>
    );
  });
};

export * from './types';

export default function CardComponent({
  type = CardType.DEFAULT,
  title = '',
  content = '',
  actions = [],
  image = '',
}: CardProps) {
  const classes = useStyles();

  return (
    <Card data-testid="card-component" className={classes.root}>
      <CardActionArea>
        {type === CardType.IMAGE && (
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={image}
            title={title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>{renderActions(actions)}</CardActions>
    </Card>
  );
}
