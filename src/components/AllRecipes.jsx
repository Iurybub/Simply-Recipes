import React from 'react'
import TagList from './TagList'
import RecipesList from './RecipesList'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    allContentfulRecipe(sort: {order: ASC, fields: title}) {
      nodes {
        title
        prepTime
        description {
          internal {
            content
          }
        }
        servings
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          description
          id
        }
        cookTime
        id
        content {
          tags
        }
      }
    }
  }
`
const AllRecipes = () => {
    const data = useStaticQuery(query)
    const recipes = data.allContentfulRecipe.nodes
    return (
        <section className="recipes-container">
            <TagList recipes={recipes}/>
            <RecipesList recipes={recipes}/>
        </section>
    )
}

export default AllRecipes
