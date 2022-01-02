import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from "gatsby";
import setUpTags from "../utils/setUpTags";
import slugify from 'slugify';
import SEO from "../components/SEO"


const Tags = ({ data }) => {
  const newTags = setUpTags(data.allContentfulRecipe.nodes)
  return (
    <div>
      <Layout>
        <SEO title="Tags" />
        <main className="page">
          <section className="tags-page">
            {newTags.map((tag, index) => {
              const [text, value] = tag
              const slug = slugify(text, { lower: true })
              return <Link key={index} to={`/tags/${slug}`} className="tag"> <h5>{text}</h5> <p>{value} recipe</p></Link>
            })}
          </section>
        </main>
      </Layout>
    </div>
  )
}
export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
