import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-direction: flex-start;
  width: auto;
  margin-bottom: 50px;
  overflow-x: scroll;

  #slide0 {
    margin-left: 50vw;
    transform: translateX(-50%);
  }

  .slide {
    transform: translateX(-50%);
    padding-left: 40px;
    margin-left: 0;
    img {
      width: auto;
      height: 50vh;
      object-fit: contain;
    }
  }
  .bold > p {
    font-family: 'Trade-Gothic';
    font-size: 1rem;
    line-height: .5rem;
  }
  .bold {
    padding: 10px 0 0 70px;
  }
`

const Linkss = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .pressRelease {
    width: 50%;
    height: 150px;
    background-color: #D1FFC3;
  }
  .artistProfile {
    width: 50%;
    background-color: #B2BFC8;
    height: 150px;
  }
  h2 {
    padding: 10px;
  }
`

const Textblock = styled.div`
  width: 60vw;
  margin: 80px auto;
`

const ExhibitionTemplate = (props) => {

  const exhibition = props.data.allWordpressWpExhibitions.edges[0].node
  const slides = exhibition.acf.gallery_module_exhibitions[0].slides

  console.log(slides[0])

  
  return (
    <Layout>
      <div className="exhibition">
        <h1>{exhibition.title}</h1>
        <h2>{exhibition.acf.exhibition_subtitle}</h2>
        <img className="fullWidth" alt={exhibition.acf.fullwidth_image.title} src={exhibition.acf.fullwidth_image.source_url} />
        <h2>{exhibition.acf.starting_date} - {exhibition.acf.ending_date}</h2>
        <h2>{exhibition.acf.exhibition_location}</h2>
        <Textblock><div dangerouslySetInnerHTML={{ __html: exhibition.acf.textblock }}></div></Textblock>
        <Gallery className="slides fullWidth">
            {slides.map((slide, index) => (
                <div className="slide" key={index} id={'slide' + index}>
                  <img src={slide.image.source_url} alt={slide.image.title} />
                  <div className="bold" dangerouslySetInnerHTML={{ __html: slide.caption }}></div>
                </div>
            ))}
        </Gallery>
        <Linkss className="fullWidth">
              {exhibition.acf.artist_name.post_name =! 'undefined' &&
                <div className="artistProfile" >
                  <Link to={exhibition.acf.artist_name.post_name}><h2>Artists Profile</h2></Link>
                </div>  
              }
              <div className="pressRelease">
                <a href={exhibition.acf.press_release.source_url} download target="_blank"><h2>Press Release</h2></a>
              </div>
        </Linkss>
      </div>
    </Layout>
  )

}

export default ExhibitionTemplate

export const query = graphql`
  query($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpExhibitions(filter: {slug: { eq: $slug}}) {
      edges {
        node {
          id
          slug
          title
          fields {
            deploy
          }
          acf {
            fullwidth_image {
              id
              source_url
              title
            }
            artist_name {
              post_name
              post_title
            }
            starting_date(formatString: "MMM DD")
            ending_date(formatString: "MMM DD YYYY")
            exhibition_location
            exhibition_subtitle
            gallery_module_exhibitions {
              slides {
                id
                image {
                  title
                  source_url
                }
                caption
              }
            }
            header
            optional_artist
            press_release {
              source_url
            }
            seo {
              description
              image
              keywords
            }
            textblock
          }
        }
      }
    }
  }
`
