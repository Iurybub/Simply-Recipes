import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO"

const About = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
  return (
    <Layout>
      <SEO title="About" description="This is a about page" />
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p> PBR&B tousled truffaut listicle freegan blog man braid migas wolf echo park ethical deep v. Biodiesel quinoa health goth butcher banh mi ennui cardigan.</p>
            <p> Truffaut listicle freegan blog man braid migas wolf echo park ethical deep v. Biodiesel quinoa health goth butcher banh mi ennui cardigan.</p>
            <Link to='/contact' className='btn'>Contact</Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      filter: {featured: {eq: true}}
      sort: {fields: title, order: ASC}
    ) {
      nodes {
        title
        image {
          gatsbyImageData
        }
        cookTime
        servings
        prepTime
        id
      }
    }
  }
`

export default About
