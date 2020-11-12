import Menu from 'components/Menu';
import Head from 'next/head';
import Layout from 'components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Menu />
    </Layout>
  );
};

export default Home;
