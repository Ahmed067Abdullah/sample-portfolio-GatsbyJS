import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../../styles/projects.module.css";

const Projects = ({ data }) => {
  const projects = data.proejcts.nodes;
  const { email } = data.contact.siteMetadata;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            const { thumb, slug, title, stack } = project.frontmatter;
            const image = getImage(thumb)
            return (
              <Link to={"/projects/" + slug} key={project.id}>
                <div>
                  <GatsbyImage
                    image={image}
                    alt="A dinosaur"
                    placeholder="blurred"
                  />
                  <h3>{title}</h3>
                  <p>{stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>Like what you see? email me at {email} for a quote!</p>
      </div>
    </Layout>
  );
}

export const qurey = graphql`
  query GetAllProjects {
    proejcts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    contact: site(siteMetadata: {}) {
      siteMetadata {
        email
      }
    }
  }
`

export default Projects;