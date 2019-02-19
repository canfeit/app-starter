import React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Container>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
    </Layout>
  )
}

const User = props => (
  <div>
    <img src={props.avatar} alt="" />
    <h2>{props.username}</h2>
    <p>{props.excerpt}</p>
  </div>
)

// export const query = graphql`
//   query {
//     allStrapiUser {
//       edges {
//         node {
//           username
//         }
//       }
//     }
//   }
// `
