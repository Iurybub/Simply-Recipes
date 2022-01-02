import React from 'react'
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO"

const Contact = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
    return (
        <div>
            <Layout>
                <SEO title="Contact" />
                <main className="page">
                    <section className="contact-page">
                        <article className="contact-info">
                            <h3>Want To Get In Touch</h3>
                            <p>
                                Leggings organic helvetica occupy pabst man braid fashion
                                axe crucifix brunch copper mug. Jean shorts umami adaptogen
                                next level paleo. Wolf slow-carb chartreuse, tousled typewriter
                                taxidermy.
                            </p>
                            <p>
                                Disrupt intelligentsia microdosing church-key
                                activated charcoal salvia. Hexagon asymmetrical cliche
                                live-edge affogato.
                            </p>
                            <p>
                                Crucifix pour-over food truck intelligentsia,
                                cray etsy fingerstache kickstarter typewriter trust fund church-key
                                health goth brooklyn enamel pin put a bird on it.
                            </p>
                        </article>
                        <article>
                            <form className='form contact-form' action="https://formspree.io/f/xrgjblya"
                                method="POST">
                                <div className='form-row'>
                                    <label htmlFor='name'>your name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className='form-row'>
                                    <label htmlFor='email'>your email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div className='form-row'>
                                    <label htmlFor='message'>your message</label>
                                    <textarea type="text" name="message" id="message" />
                                </div>
                                <button type="submit" className="btn block">Submit</button>
                            </form>
                        </article>
                    </section>
                    <RecipesList recipes={recipes} />
                </main>
            </Layout>
        </div>
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

export default Contact
