import Footer from '../footer/Footer';
import PropTypes from 'prop-types';
import MainAppBar from '../main-app-bar/MainAppBar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_APP_NAME} | Home`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="users from json placeholder" />
      </Head>
      <MainAppBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any
};
