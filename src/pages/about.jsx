import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="">About</Header>
    <Container center={center}>
      <h2>
        TODO - write about us content
      </h2>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
