import cuid from 'cuid';

import Menu from 'components/Menu';
import Head from 'next/head';
import Layout from 'components/Layout';
import Card, { CardProps, CardType } from 'components/Card';
import Typography from 'components/Typography';
import Container from 'components/Container';
import Grid from 'components/Grid';
import { makeStyles, Theme as AugmentedTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: AugmentedTheme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  jumboContent: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

interface CardTypeWithId extends CardProps {
  id: string;
}

const cards: CardTypeWithId[] = [
  {
    id: cuid(),
    type: CardType.IMAGE,
    title: 'My Performance',
    content: "How have you faired your last few games? Let's take a look.",
    image: '/images/myPerformance.jpg',
    actions: [{ label: 'Share', action: () => undefined }],
  },
  {
    id: cuid(),
    type: CardType.IMAGE,
    title: 'Agent Lookup',
    content:
      'Maybe the most import thing to consider is the right agent for the job.',
    image: '/images/agentLookup.jpg',
    actions: [{ label: 'Share', action: () => undefined }],
  },
  {
    id: cuid(),
    type: CardType.IMAGE,
    title: 'Valorant Guns',
    content: 'Guns compliment your playstyle. What loadout will you choose?',
    image: '/images/gunBundle.jpg',
    actions: [{ label: 'Share', action: () => undefined }],
  },
  {
    id: cuid(),
    type: CardType.IMAGE,
    title: 'Maps',
    content:
      "The map pool changes slowly, but when it does there's a lot to learn.",
    image: '/images/haven.jpg',
    actions: [{ label: 'Share', action: () => undefined }],
  },
];

const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Menu />
      <main>
        <div className={classes.jumboContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to AgentTracker
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {`Below you'll find some useful options for tracking your overall
              progress and the Valorant game itself. Explore and have fun... as
              Phoenix likes to say:`}
            </Typography>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {`"Come on, let's go!"`}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(({ id, type, title, content, image, actions }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card
                  type={type}
                  title={title}
                  content={content}
                  image={image}
                  actions={actions}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Layout>
  );
};

export default Home;
