import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import '../assets/scss/index.scss';

const Layout = ({ children, showNavigation, fixedNav }) => (
  <StaticQuery
    query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title,
             menu {
               key
               title
               url
               type
             }
           }
         }
       }
    `}
    render={({ site }) => (
      <Fragment>
        <Helmet
          defaultTitle={site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'millen enterprises' },
            { name: 'keywords', content: 'kuat harimau, millenenterprises' },
          ]}
        />
        <Header
          siteTitle={site.siteMetadata.title}
          siteMenu={site.siteMetadata.menu}
          showNavigation={showNavigation}
          fixed={fixedNav}
        />
        {children}
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showNavigation: PropTypes.bool,
  fixedNav: PropTypes.bool,
};

Layout.defaultProps = {
  showNavigation: true,
  fixedNav: false,
};

export default Layout;
