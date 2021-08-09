import React from 'react'
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';
import * as styles from "../styles/project-details.module.css";

function ProjectDetails({ data }) {
  const { frontmatter: { title, stack, featuredImg }, html } = data.project;
  const image = getImage(featuredImg);

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage
            image={image}
            alt="A dinosaur"
            placeholder="blurred"
          />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const qurey = graphql`
query MyQuery($slug: String) {
  project: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    html
  }
}
`;

export default ProjectDetails;