import Menu from 'components/Menu';
import Head from 'next/head';
import Layout from 'components/Layout';
import Card, { CardType } from 'components/Card';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Menu />
      <Card
        type={CardType.IMAGE}
        title="Valorant Content"
        content="See the current in game content."
        image="/images/gunBundle.jpg"
        actions={[{ label: 'Share', action: () => undefined }]}
      />
    </Layout>
  );
};

export default Home;
