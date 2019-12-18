
import React, { useState } from "react"
import { Link } from "gatsby"


import styled from "styled-components"


const About = styled.div`
  background-color: #BCCABA;
  padding: 1vw 1vw 5vw;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    padding: 1vw 2vw 5vw;
  }
  &.fullWidth {
    width: 98vw;
    @media only screen and (max-width: 767px) {
      width: 96vw;
    }
  }
  h2 > p {
    font-family: 'Trade-Gothic';
    font-size: 5.297vw;
    font-weight: 400;
    line-height: 5.297vw;
    text-transform: none;;
  }
  .right {
    width: fit-content;
    align-self: flex-end;
  }
`


const AboutModule = (props) => {

  const about = props

  return (
    <About className="fullWidth">
      <h2 dangerouslySetInnerHTML={{ __html: about.about_module }}></h2>
      <div className="right">
        <Link to={`/contact#about`}><h2 className="underline">Read more</h2></Link>
      </div>
    </About>
  )
}


export default AboutModule