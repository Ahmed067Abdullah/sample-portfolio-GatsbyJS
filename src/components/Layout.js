import React from 'react';
import Navbar from './Navbar';
import "../styles/global.css";
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query MetaDataUsingStatic {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;
  return (
    <div className="layout">
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: 'gatsby, react, tutorial' },
        ]}
      />
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}

export default Layout;