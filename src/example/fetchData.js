import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
      query {
      site {
        info: siteMetadata {
          author
          description
          person {
            age
            name
          }
          title
          complexData {
            age
            name
          }
        }
      }
    }
`;
const FetchData = () => {
  const { site: { info: { title } } } = useStaticQuery(getData);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default FetchData
