import Layout from '../components/layout/Layout';
import '../styles/scss/index.scss';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};

export default MyApp;
